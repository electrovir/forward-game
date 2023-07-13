import {assign, css, defineElement, html, listen} from 'element-vir';
import {InputDeviceHandler} from 'input-device-handler';
import {gameVersionNames} from '../../../data/versions';
import {ChangeRouteEvent, GameFullRoute} from '../../../router/game-router';
import {BasicInputDevice} from '../data/basic-input-device';
import {V2RoutesEnum, doesRouteNeedSanitization, sanitizeV2Route} from '../data/routing/v2-routes';
import {getGameSettings, saveGameSettings} from '../data/settings/game-settings';
import {BreakingErrorEvent} from './global-events/breaking-error.event';
import {UpdateGameSettingsEvent} from './global-events/update-game-settings.event';
import {VirAssignControlsV2} from './route-pages/assign-controls/vir-assign-controls.element';
import {VirGameV2} from './route-pages/game/vir-game.element';

const initialGameSettings = getGameSettings();

export const VirForwardGameAppV2 = defineElement<{currentRoute: GameFullRoute}>()({
    tagName: 'vir-forward-game-app-v2',
    stateInitStatic: {
        inputHandler: new InputDeviceHandler({
            gamepadDeadZoneSettings: initialGameSettings.gamepadSettings.deadZones,
        }),
        gameSettings: initialGameSettings,
        selectedDevice: undefined as BasicInputDevice | undefined,
    },
    styles: css`
        :host,
        main {
            width: 100%;
            height: 100%;
        }
        main {
            display: flex;
            flex-direction: column;
        }
        main > * {
            flex-grow: 1;
        }
    `,
    renderCallback({state, updateState, inputs, dispatch}) {
        if (inputs.currentRoute.paths[0] !== gameVersionNames.v2) {
            return '';
        } else if (doesRouteNeedSanitization(inputs.currentRoute)) {
            dispatch(
                new ChangeRouteEvent({
                    route: sanitizeV2Route(inputs.currentRoute),
                    sanitized: true,
                }),
            );
            return html``;
        }

        const showGame = !!(
            inputs.currentRoute.paths[1] === V2RoutesEnum.Play && state.selectedDevice
        );

        if (showGame) {
            state.inputHandler.pausePollingLoop();
        } else {
            state.inputHandler.startPollingLoop();
        }

        return html`
            <main
                ${listen(UpdateGameSettingsEvent, (event) => {
                    saveGameSettings(event.detail);
                    updateState({
                        gameSettings: event.detail,
                    });
                })}
                ${listen(BreakingErrorEvent, (event) => {
                    console.error(event.detail);
                })}
            >
                ${showGame
                    ? html`
                          <${VirGameV2}
                              ${assign(VirGameV2, {
                                  gameSettings: state.gameSettings,
                                  inputHandler: state.inputHandler,
                                  selectedDevice: state.selectedDevice,
                              })}
                              ${listen(VirGameV2.events.exit, () => {
                                  dispatch(
                                      new ChangeRouteEvent({
                                          route: {
                                              paths: [
                                                  gameVersionNames.v2,
                                                  V2RoutesEnum.AssignControls,
                                              ],
                                          },
                                          sanitized: false,
                                      }),
                                  );
                              })}
                          ></${VirGameV2}>
                      `
                    : html`
                          <${VirAssignControlsV2}
                              ${assign(VirAssignControlsV2, {
                                  inputHandler: state.inputHandler,
                                  gameSettings: state.gameSettings,
                                  selectedDevice: state.selectedDevice,
                              })}
                              ${listen(VirAssignControlsV2.events.assignmentDone, () => {
                                  dispatch(
                                      new ChangeRouteEvent({
                                          route: {
                                              paths: [
                                                  gameVersionNames.v2,
                                                  V2RoutesEnum.Play,
                                              ],
                                          },
                                          sanitized: false,
                                      }),
                                  );
                              })}
                              ${listen(VirAssignControlsV2.events.changeDevice, (event) => {
                                  const selectedDevice = event.detail;
                                  updateState({
                                      selectedDevice: selectedDevice,
                                  });
                              })}
                          ></${VirAssignControlsV2}>
                      `}
            </main>
        `;
    },
    cleanupCallback({state}) {
        state.inputHandler.removeAllEventListeners();
    },
});
