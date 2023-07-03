import {assign, css, defineElement, html, listen} from 'element-vir';
import {InputDeviceHandler} from 'input-device-handler';
import {gameVersionNames} from '../../../data/versions';
import {ChangeRouteEvent, GameFullRoute} from '../../../router/game-router';
import {BasicInputDevice} from '../data/basic-input-device';
import {V1RoutesEnum, doesRouteNeedSanitization, sanitizeV1Route} from '../data/routing/v1-routes';
import {getGameSettings, saveGameSettings} from '../data/settings/game-settings';
import {BreakingErrorEvent} from './global-events/breaking-error.event';
import {UpdateGameSettingsEvent} from './global-events/update-game-settings.event';
import {VirAssignControls} from './route-pages/assign-controls/vir-assign-controls.element';
import {VirGame} from './route-pages/game/vir-game.element';

const initialGameSettings = getGameSettings();

export const VirForwardGameApp = defineElement<{currentRoute: GameFullRoute}>()({
    tagName: 'vir-forward-game-app',
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
        if (inputs.currentRoute.paths[0] !== gameVersionNames.v1) {
            return '';
        } else if (doesRouteNeedSanitization(inputs.currentRoute)) {
            dispatch(
                new ChangeRouteEvent({
                    route: sanitizeV1Route(inputs.currentRoute),
                    sanitized: true,
                }),
            );
            return html``;
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
                ${inputs.currentRoute.paths[1] === V1RoutesEnum.AssignControls ||
                !state.selectedDevice
                    ? html`
                          <${VirAssignControls}
                              ${assign(VirAssignControls, {
                                  inputHandler: state.inputHandler,
                                  gameSettings: state.gameSettings,
                                  selectedDevice: state.selectedDevice,
                              })}
                              ${listen(VirAssignControls.events.assignmentDone, () => {
                                  dispatch(
                                      new ChangeRouteEvent({
                                          route: {
                                              paths: [
                                                  gameVersionNames.v1,
                                                  V1RoutesEnum.Play,
                                              ],
                                          },
                                          sanitized: false,
                                      }),
                                  );
                              })}
                              ${listen(VirAssignControls.events.changeDevice, (event) => {
                                  const selectedDevice = event.detail;
                                  updateState({
                                      selectedDevice: selectedDevice,
                                  });
                              })}
                          ></${VirAssignControls}>
                      `
                    : html`
                          <${VirGame}
                              ${assign(VirGame, {
                                  gameSettings: state.gameSettings,
                                  inputHandler: state.inputHandler,
                                  selectedDevice: state.selectedDevice,
                              })}
                              ${listen(VirGame.events.exit, () => {
                                  dispatch(
                                      new ChangeRouteEvent({
                                          route: {
                                              paths: [
                                                  gameVersionNames.v1,
                                                  V1RoutesEnum.AssignControls,
                                              ],
                                          },
                                          sanitized: false,
                                      }),
                                  );
                              })}
                          ></${VirGame}>
                      `}
            </main>
        `;
    },
    cleanupCallback({state}) {
        state.inputHandler.removeAllEventListeners();
    },
});
