import {assign, css, defineElementNoInputs, html, listen} from 'element-vir';
import {InputDeviceHandler} from 'input-device-handler';
import {AppRoute} from '../data/app-routes';
import {GameLoopHandler} from '../data/game-loop';
import {getGameSettings, saveGameSettings} from '../data/settings/game-settings';
import {defaultForwardGameAppRoute} from '../router/app-router';
import {UpdateGameSettings} from './global-events/update-game-settings.event';
import {VirAssignControls} from './route-pages/assign-controls/vir-assign-controls.element';
import {VirForwardGameAppRouting} from './vir-app-routing.element';

const masterGameLoop = new GameLoopHandler();
const initialGameSettings = getGameSettings();

export const VirForwardGameApp = defineElementNoInputs({
    tagName: 'vir-forward-game-app',
    stateInit: {
        currentRoute: defaultForwardGameAppRoute,
        gameLoop: masterGameLoop,
        inputHandler: new InputDeviceHandler({
            gamepadDeadZoneSettings: initialGameSettings.gamepadSettings.deadZones,
        }),
        gameSettings: initialGameSettings,
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
                ${listen(UpdateGameSettings, (event) => {
                    saveGameSettings(event.detail);
                    updateState({
                        gameSettings: event.detail,
                    });
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
                ${
                    state.currentRoute.paths[0] === AppRoute.AssignControls
                        ? html`
                            <${VirAssignControls}
                                ${assign(VirAssignControls, {
                                    inputHandler: state.inputHandler,
                                    gameSettings: state.gameSettings,
                                })}
                                ${listen(VirAssignControls.events.assignmentSuccessful, () => {
                                    updateState({
                                        currentRoute: {
                                            ...state.currentRoute,
                                            paths: [AppRoute.Game],
                                        },
                                    });
                                })}
                            ></${VirAssignControls}>`
                        : html`
                              game
                          `
                }
            </main>
        `;
    },
});
