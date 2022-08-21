import {assign, defineElementNoInputs, html} from 'element-vir';
import {SpaRouter} from 'spa-router-vir';
import {GameLoopHandler} from '../../data/game-loop';
import {GamepadMapping} from '../../data/gamepad/gamepad';
import {GamepadLoopHandler} from '../../data/gamepad/gamepad-loop-handler';
import {
    defaultForwardGameAppRoute,
    ForwardGameAppRoute,
    getForwardGameAppRouter,
} from '../../router/app-router';
import {VirGamepadConnectionIndicator} from '../gamepad-connection-indicators.element';

const masterGameLoop = new GameLoopHandler();

export const VirForwardGameApp = defineElementNoInputs({
    tagName: 'vir-forward-game-app',
    stateInit: {
        stuff: 'hello',
        router: undefined as any as SpaRouter<ForwardGameAppRoute>,
        currentRoute: defaultForwardGameAppRoute,
        gamepadMapping: {} as GamepadMapping,
        activeGamepads: {} as Record<number, boolean>,
        gameLoop: masterGameLoop,
        gamepadHandler: new GamepadLoopHandler(masterGameLoop),
    },
    initCallback: ({state, updateState}) => {
        updateState({
            router: getForwardGameAppRouter(),
        });
        state.router.addRouteListener(true, (fullRoute) => {
            updateState({
                currentRoute: fullRoute,
            });
        });
    },
    renderCallback: ({state, updateState}) => {
        return html`
            push buttons on your controller
            <${VirGamepadConnectionIndicator}
                ${assign(VirGamepadConnectionIndicator, {
                    gamepadHandler: state.gamepadHandler,
                    gamepadInputSettings: {},
                })}
            ></${VirGamepadConnectionIndicator}>
        `;
    },
});
