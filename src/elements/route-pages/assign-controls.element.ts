import {areJsonEqual, mapObject} from 'augment-vir';
import {css, defineElement, html, listen} from 'element-vir';
import {TemplateResult} from 'lit';
import {GamepadLoopHandler} from '../../data/gamepad/gamepad-loop-handler';
import {ForwardGameSettings} from '../../data/settings/game-settings';
import {InputBindingSettings, keyboardDevice} from '../../data/settings/input-binding-settings';

export type AssignControlsInputs = {
    gamepadHandler: GamepadLoopHandler;
    gameSettings: ForwardGameSettings;
};

export const VirAssignControls = defineElement<AssignControlsInputs>()({
    tagName: 'vir-assign-controls',
    styles: css`
        :host {
            display: flex;
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

        .device-selector.selected-device {
            cursor: auto;
            border-color: dodgerblue;
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
        gamepadIds: {} as Record<number, string>,
        currentlySelectedDevice: keyboardDevice,
    },
    initCallback: ({inputs, state, updateState}) => {
        inputs.gamepadHandler.addLoopCallback((newGamepadMapping) => {
            const newGamepadIds = mapObject(newGamepadMapping, (index, gamepad) => {
                return gamepad.id;
            });

            if (!areJsonEqual(newGamepadIds, state.gamepadIds)) {
                updateState({
                    gamepadIds: newGamepadIds,
                });
            }
        });
    },
    renderCallback: ({state, inputs, updateState}) => {
        const devices = [
            keyboardDevice,
            ...Array.from(new Set(Object.values(state.gamepadIds))),
        ];

        return html`
            ${devices.map((deviceName) => {
                return getDeviceSelector({
                    selectedDeviceName: state.currentlySelectedDevice,
                    deviceName,
                    selectCallback: (deviceId) => {
                        updateState({
                            currentlySelectedDevice: deviceId,
                        });
                    },
                });
            })}
            ${inputsTemplate(inputs.gameSettings.bindings[state.currentlySelectedDevice])}
        `;
    },
});

function inputsTemplate(currentBindings: InputBindingSettings | undefined) {}

function getDeviceSelector({
    selectedDeviceName,
    deviceName,
    selectCallback,
}: {
    selectedDeviceName: string;
    deviceName: string;
    selectCallback: (deviceId: string) => void;
}): TemplateResult {
    const deviceEmoji = deviceName === keyboardDevice ? '⌨️' : '🎮';
    const selectedClass = selectedDeviceName === deviceName ? 'selected-device' : '';

    return html`
        <div
            class="device-selector ${selectedClass}"
            ${listen('click', () => {
                selectCallback(deviceName);
            })}
        >
            <span class="device-emoji">${deviceEmoji}</span>
            <span class="device-name">${deviceName}</span>
        </div>
    `;
}
