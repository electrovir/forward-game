import {assign, css, defineElementNoInputs, html, listen} from 'element-vir';
import {InputDeviceHandler} from 'input-device-handler';
import {AppRoute} from '../data/app-routes';
import {BasicInputDevice} from '../data/basic-input-device';
import {getGameSettings, saveGameSettings} from '../data/settings/game-settings';
import {defaultForwardGameAppRoute} from '../router/app-router';
import {BreakingErrorEvent} from './global-events/breaking-error.event';
import {UpdateGameSettingsEvent} from './global-events/update-game-settings.event';
import {VirAssignControls} from './route-pages/assign-controls/vir-assign-controls.element';
import {VirGame} from './route-pages/game/vir-game.element';
import {VirForwardGameAppRouting} from './vir-app-routing.element';

const initialGameSettings = getGameSettings();

export const VirForwardGameApp = defineElementNoInputs({
    tagName: 'vir-forward-game-app',
    stateInitStatic: {
        currentRoute: defaultForwardGameAppRoute,
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
    renderCallback: ({state, updateState}) => {
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
                <${VirForwardGameAppRouting}
                    ${assign(VirForwardGameAppRouting, {
                        currentRoute: state.currentRoute,
                    })}
                    ${listen(VirForwardGameAppRouting.events.routeChange, (event) => {
                        updateState({currentRoute: event.detail});
                    })}
                ></${VirForwardGameAppRouting}>
                ${state.currentRoute.paths[0] === AppRoute.AssignControls || !state.selectedDevice
                    ? html`
                          <${VirAssignControls}
                              ${assign(VirAssignControls, {
                                  inputHandler: state.inputHandler,
                                  gameSettings: state.gameSettings,
                                  selectedDevice: state.selectedDevice,
                              })}
                              ${listen(VirAssignControls.events.assignmentDone, () => {
                                  updateState({
                                      currentRoute: {
                                          ...state.currentRoute,
                                          paths: [AppRoute.Game],
                                      },
                                  });
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
                                  updateState({
                                      currentRoute: {
                                          ...state.currentRoute,
                                          paths: [AppRoute.AssignControls],
                                      },
                                  });
                              })}
                          ></${VirGame}>
                      `}
            </main>
        `;
    },
});
