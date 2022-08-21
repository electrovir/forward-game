import {mapObject} from 'augment-vir';
import {assign, defineElementNoInputs, html, listen} from 'element-vir';
import {SpaRouter} from 'spa-router-vir';
import {areAnyGamepadInputsActive, GamepadMapping} from '../../data/gamepad/gamepad';
import {
    defaultForwardGameAppRoute,
    ForwardGameAppRoute,
    getForwardGameAppRouter,
} from '../../router/app-router';
import {VirGamepadConnectionIndicator} from '../gamepad-connection-indicators.element';
import {VirGamepadReader} from '../gamepad-reader.element';

export const VirForwardGameApp = defineElementNoInputs({
    tagName: 'vir-forward-game-app',
    stateInit: {
        stuff: 'hello',
        router: undefined as any as SpaRouter<ForwardGameAppRoute>,
        currentRoute: defaultForwardGameAppRoute,
        gamepadMapping: {} as GamepadMapping,
        activeGamepads: {} as Record<number, boolean>,
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
            hello there: ${state.currentRoute.paths[0]}
            <${VirGamepadReader}
                ${listen(VirGamepadReader.events.gamepadChange, (event) => {
                    updateState({
                        gamepadMapping: event.detail,
                        activeGamepads: mapObject(event.detail, (key, gamepad) => {
                            return areAnyGamepadInputsActive(gamepad);
                        }),
                    });
                })}
            ></${VirGamepadReader}>
            <${VirGamepadConnectionIndicator}
                ${assign(VirGamepadConnectionIndicator, {
                    gamepadsWithButtonsPushed: state.activeGamepads,
                })}
            ></${VirGamepadConnectionIndicator}>
        `;
    },
});
