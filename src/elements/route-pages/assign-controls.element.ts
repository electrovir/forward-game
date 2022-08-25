import {areJsonEqual, getEnumTypedValues} from 'augment-vir';
import {css, defineElement, html, listen} from 'element-vir';
import {TemplateResult} from 'lit';
import {AllDeviceInputHandler} from '../../data/all-device-input-handler';
import {createGamepadIdMapping, GamepadIdMapping} from '../../data/gamepad/gamepad-mapping';
import {ForwardGameSettings} from '../../data/settings/game-settings';
import {
    AvailableControls,
    InputBindingSettings,
    InputDevice,
    isGamepad,
    keyboardDevice,
} from '../../data/settings/input-binding-settings';

export type AssignControlsInputs = {
    inputHandler: AllDeviceInputHandler;
    gameSettings: ForwardGameSettings;
};

type WaitingForInput = {
    deviceId: string;
    deviceIndex: number;
    assignment: AvailableControls;
};

export const VirAssignControls = defineElement<AssignControlsInputs>()({
    tagName: 'vir-assign-controls',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        .device-emoji {
            font-size: 3em;
        }

        .device-selector {
            display: flex;
            flex-direction: column;
            padding: 8px;
            border: 2px solid #ccc;
            border-radius: 8px;
            align-items: center;
            max-width: 200px;
            cursor: pointer;
            overflow: hidden;
        }

        .device-name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
        }

        .device-selectors {
            display: flex;
        }

        .device-selector.selected-device {
            cursor: auto;
            border-color: dodgerblue;
        }

        .input-setting {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .inputs {
            display: flex;
            flex-wrap: wrap;
            gap: 32px;
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
        gamepadInputs: {} as GamepadIdMapping,
        currentlySelectedDevice: keyboardDevice as InputDevice,
        waitingForInput: undefined as undefined | WaitingForInput,
    },
    initCallback: ({inputs, state, updateState}) => {
        inputs.inputHandler.addLoopCallback((allDeviceInputs) => {
            const newGamepadInputs = createGamepadIdMapping(allDeviceInputs.gamepad);

            if (!areJsonEqual(newGamepadInputs, state.gamepadInputs)) {
                updateState({
                    gamepadInputs: newGamepadInputs,
                });
                if (state.waitingForInput) {
                }
            }
        });
    },
    renderCallback: ({state, inputs, updateState}) => {
        const availableDevices: InputDevice[] = [
            keyboardDevice,
            ...Array.from(new Set(Object.values(state.gamepadInputs))),
        ];

        const selectedDeviceId = state.currentlySelectedDevice.id;

        return html`
            <div class="device-selectors">
                ${availableDevices.map((device) => {
                    return getDeviceSelector({
                        waitingForInput: !!state.waitingForInput,
                        thisDevice: device,
                        selectedDevice: state.currentlySelectedDevice,
                        selectCallback: (deviceId) => {
                            updateState({
                                currentlySelectedDevice: deviceId,
                            });
                        },
                    });
                })}
            </div>
            <div class="inputs">
                ${inputsTemplate({
                    selectedDevice: state.currentlySelectedDevice,
                    currentBindings: inputs.gameSettings.bindings[selectedDeviceId],
                    waitingForInput: state.waitingForInput,
                    updateStateCallback: (waitingForInput) => {
                        updateState({
                            waitingForInput,
                        });
                    },
                })}
            </div>
        `;
    },
});

function inputsTemplate({
    selectedDevice,
    currentBindings,
    waitingForInput,
    updateStateCallback,
}: {
    selectedDevice: InputDevice;
    currentBindings: InputBindingSettings | undefined;
    waitingForInput: undefined | WaitingForInput;
    updateStateCallback: (waitingForInput: WaitingForInput) => void;
}) {
    return getEnumTypedValues(AvailableControls).map((enumValue) => {
        const isThisOneWaitingForInput =
            waitingForInput && waitingForInput.assignment === enumValue;
        return html`
            <div class="input-setting">
                ${enumValue}
                <button
                    ?disabled=${waitingForInput}
                    ${listen('click', () => {
                        if (!waitingForInput) {
                            updateStateCallback({
                                assignment: enumValue,
                                deviceId: selectedDevice.id,
                                deviceIndex: selectedDevice.index,
                            });
                        }
                    })}
                >
                    ${isThisOneWaitingForInput ? 'Waiting for input...' : 'Change'}
                </button>
                Currently mapped to: ${currentBindings?.bindings[enumValue] ?? 'N/A'}
            </div>
        `;
    });
}

function getDeviceSelector({
    selectedDevice,
    thisDevice,
    waitingForInput,
    selectCallback,
}: {
    selectedDevice: InputDevice;
    thisDevice: InputDevice;
    waitingForInput: boolean;
    selectCallback: (inputDevice: InputDevice) => void;
}): TemplateResult {
    const deviceEmoji = isGamepad(thisDevice) ? '🎮' : '⌨️';
    const selectedClass = selectedDevice.id === thisDevice.id ? 'selected-device' : '';

    return html`
        <div
            class="device-selector ${selectedClass}"
            ${listen('click', () => {
                if (!waitingForInput) {
                    selectCallback(thisDevice);
                }
            })}
        >
            <span class="device-emoji">${deviceEmoji}</span>
            <span class="device-name">${thisDevice.id}</span>
        </div>
    `;
}
