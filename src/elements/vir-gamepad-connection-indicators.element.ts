import {areJsonEqual, getObjectTypedKeys, mapObject} from 'augment-vir';
import {css, defineElement, html} from 'element-vir';
import {TemplateResult} from 'lit';
import {areAnyGamepadInputsActive} from '../data/gamepad/gamepad-input';
import {GamepadLoopHandler} from '../data/gamepad/gamepad-loop-handler';
import {GamepadSettings} from '../data/settings/gamepad-settings';

export type ConnectionIndicatorInputs = {
    gamepadHandler: GamepadLoopHandler;
    gamepadInputSettings: GamepadSettings;
};

export const VirGamepadConnectionIndicator = defineElement<ConnectionIndicatorInputs>()({
    tagName: 'vir-gamepad-connection-indicator',
    styles: css`
        :host {
            display: flex;
        }

        .gamepad-icon {
            font-size: 2em;
        }

        .glowing {
            animation: glow 200ms infinite alternate;
        }

        @keyframes glow {
            0% {
                filter: drop-shadow(0 0 1px red);
            }
            100% {
                filter: drop-shadow(0 0 4px red);
            }
        }
    `,
    stateInit: {
        activeGamepads: {} as Record<number, boolean>,
    },
    initCallback: ({inputs, state, updateState}) => {
        inputs.gamepadHandler.addLoopCallback((newGamepadMapping) => {
            const newActiveGamepads = mapObject(newGamepadMapping, (index, gamepad) => {
                return areAnyGamepadInputsActive(gamepad, inputs.gamepadInputSettings);
            });

            if (!areJsonEqual(newActiveGamepads, state.activeGamepads)) {
                updateState({
                    activeGamepads: newActiveGamepads,
                });
            }
        });
    },
    renderCallback: ({state}) => {
        return html`
            ${getObjectTypedKeys(state.activeGamepads)
                .sort()
                .map((gamepadIndex) => {
                    const isGamepadActive = !!state.activeGamepads[gamepadIndex];
                    return getGamepadIcon(isGamepadActive);
                })}
        `;
    },
});

function getGamepadIcon(glowing: boolean): TemplateResult {
    const glowingClass = glowing ? 'glowing' : '';
    const gamepadIcon = html`
        <span class="gamepad-icon ${glowingClass}">${'🎮'}</span>
    `;

    return gamepadIcon;
}
