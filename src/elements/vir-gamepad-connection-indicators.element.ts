import {areJsonEqual, getObjectTypedKeys} from 'augment-vir';
import {css, defineElement, html} from 'element-vir';
import {TemplateResult} from 'lit';
import {AllDeviceInputHandler, AllDeviceInputs} from '../data/all-device-input-handler';
import {wasAGamepadInputPressed} from '../data/gamepad/gamepad-input';

export type ConnectionIndicatorInputs = {
    inputHandler: AllDeviceInputHandler;
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
            animation: glow 200ms;
        }

        @keyframes glow {
            0% {
                filter: drop-shadow(0 0 4px red);
            }
            100% {
                filter: drop-shadow(0 0 1px red);
            }
        }
    `,
    stateInit: {
        currentInputDevices: {} as AllDeviceInputs,
        previousInputDevices: {} as AllDeviceInputs,
        lastActiveGamepadTimestamps: {} as Record<number, number>,
    },
    initCallback: ({inputs, state, updateState}) => {
        inputs.inputHandler.addLoopCallback((allInputs) => {
            if (!areJsonEqual(allInputs.gamepad, state.currentInputDevices)) {
                updateState({
                    currentInputDevices: allInputs,
                    previousInputDevices: state.currentInputDevices,
                });
            }
        });
    },
    renderCallback: ({state, updateState}) => {
        return html`
            ${getObjectTypedKeys(state.currentInputDevices.gamepad)
                .sort()
                .map((gamepadIndex) => {
                    const currentGamepad = state.currentInputDevices.gamepad[gamepadIndex];
                    if (!currentGamepad) {
                        throw new Error(`Failed to find gamepad at index ${gamepadIndex}`);
                    }
                    const previousGamepad = state.previousInputDevices.gamepad[gamepadIndex];
                    const isGamepadActive = !!wasAGamepadInputPressed(
                        currentGamepad.inputs,
                        previousGamepad?.inputs,
                    );
                    if (isGamepadActive) {
                        updateState({
                            lastActiveGamepadTimestamps: {
                                ...state.lastActiveGamepadTimestamps,
                                [gamepadIndex]: Date.now(),
                            },
                        });
                    }
                    return getGamepadIcon(
                        (state.lastActiveGamepadTimestamps[gamepadIndex] ?? Infinity) >
                            Date.now() - 100,
                    );
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
