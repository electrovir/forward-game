import {assign, defineElementNoInputs, html, listen} from 'element-vir';
import {AllDeviceInputHandler} from '../data/all-device-input-handler';
import {GameLoopHandler} from '../data/game-loop';
import {getGameSettings} from '../data/settings/game-settings';
import {defaultForwardGameAppRoute} from '../router/app-router';
import {VirAssignControls} from './route-pages/assign-controls.element';
import {VirForwardGameAppRouting} from './vir-app-routing.element';
import {VirGamepadConnectionIndicator} from './vir-gamepad-connection-indicators.element';

const masterGameLoop = new GameLoopHandler();

export const VirForwardGameApp = defineElementNoInputs({
    tagName: 'vir-forward-game-app',
    stateInit: {
        currentRoute: defaultForwardGameAppRoute,
        gameLoop: masterGameLoop,
        inputHandler: new AllDeviceInputHandler(masterGameLoop),
        gameSettings: getGameSettings(),
    },
    renderCallback: ({state, updateState}) => {
        return html`
            <main>
                <${VirForwardGameAppRouting}
                    ${assign(VirForwardGameAppRouting, {
                        currentRoute: state.currentRoute,
                    })}
                    ${listen(VirForwardGameAppRouting.events.routeChange, (event) => {
                        updateState({currentRoute: event.detail});
                    })}
                ></${VirForwardGameAppRouting}>
                push buttons on your controller
                <${VirGamepadConnectionIndicator}
                    ${assign(VirGamepadConnectionIndicator, {
                        inputHandler: state.inputHandler,
                        gamepadInputSettings: state.gameSettings.gamepadSettings,
                    })}
                ></${VirGamepadConnectionIndicator}>
                <${VirAssignControls}
                    ${assign(VirAssignControls, {
                        inputHandler: state.inputHandler,
                        gameSettings: state.gameSettings,
                    })}
                ></${VirAssignControls}>
            </main>
        `;
    },
});
