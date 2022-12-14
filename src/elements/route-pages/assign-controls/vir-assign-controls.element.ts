import {getObjectTypedKeys, getObjectTypedValues, mapObject, randomString} from 'augment-vir';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {
    InputDeviceHandler,
    InputDeviceHandlerEventTypeEnum,
    keyboardDeviceKeySymbol,
    mouseDeviceKeySymbol,
    PotentialDeviceKeys,
} from 'input-device-handler';
import {repeat} from 'lit/directives/repeat.js';
import {BasicInputDevice} from '../../../data/basic-input-device';
import {ForwardGameSettings} from '../../../data/settings/game-settings';
import {
    AvailableControls,
    blankBindings,
    DeviceBindings,
    hasAllBindings,
} from '../../../data/settings/input-binding-settings';
import {UpdateGameSettingsEvent} from '../../global-events/update-game-settings.event';
import {deviceBindingsStyles, getDeviceBindingsTemplate} from './device-bindings.template';
import {getDeviceSelectorTemplate} from './device-selector.template';

export type AssignControlsInputs = {
    inputHandler: InputDeviceHandler;
    gameSettings: ForwardGameSettings;
    selectedDevice: BasicInputDevice | undefined;
};

const animationDurationMs: number = 700;

export type InputDeviceAnimation = {
    timestamp: number;
    deviceName: string;
    deviceKey: PotentialDeviceKeys;
};

function removeOldAnimations(
    animations: Record<PotentialDeviceKeys, InputDeviceAnimation[]>,
): Record<PotentialDeviceKeys, InputDeviceAnimation[]> {
    const now = Date.now();
    return mapObject(animations, (key, currentAnimations): InputDeviceAnimation[] => {
        return currentAnimations.filter(
            (animation) => animation.timestamp > now - animationDurationMs,
        );
    });
}

export const VirAssignControls = defineElement<AssignControlsInputs>()({
    tagName: 'vir-assign-controls',
    events: {
        assignmentDone: defineElementEvent<void>(),
        changeDevice: defineElementEvent<BasicInputDevice>(),
    },
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 32px;
            text-align: center;
        }

        .device-selector-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            padding: 16px;
        }

        .device-icon {
            font-size: 3em;
        }

        .input-device-selector {
            max-width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            user-select: none;
            -webkit-user-select: none;
            position: relative;
            padding: 8px 16px;
            background-color: white;
            box-sizing: border-box;
            border: 2px solid #ccc;
            overflow: hidden;
            border-radius: 8px;
            cursor: pointer;
        }

        .input-device-selector span {
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 100%;
            white-space: nowrap;
        }

        .input-device-selector .device-name {
            font-size: 0.9em;
        }

        .device-icon {
            user-select: inherit;
            -webkit-user-select: inherit;
        }

        .input-device-selector.selected {
            border-color: dodgerblue;
            cursor: auto;
        }

        .animated-icon {
            border: none;
            position: absolute;
            background-color: inherit;
            padding: inherit;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-sizing: inherit;
            border-radius: inherit;
            pointer-events: none;
        }

        .animated-icon .device-icon {
            animation: glow ${animationDurationMs / 2}ms;
        }

        @keyframes glow {
            0% {
                filter: drop-shadow(0 0 6px var(--glow-color, red));
            }
            100% {
                filter: drop-shadow(0 0 0 var(--glow-color, red));
            }
        }

        .blocked {
            opacity: 0.3;
            pointer-events: none;
        }

        .continue-button {
            margin-top: 24px;
            padding: 8px;
            font: inherit;
            background-color: skyblue;
            border: 1px solid grey;
            border-radius: 4px;
            cursor: pointer;
        }

        .continue-button[disabled] {
            cursor: auto;
        }

        .continue-button:not([disabled]):hover {
            background-color: lightblue;
        }

        ${deviceBindingsStyles};
    `,
    stateInit: {
        id: '',
        currentInputDevices: {} as Record<PotentialDeviceKeys, BasicInputDevice>,
        currentInputDeviceAnimations: {} as Record<PotentialDeviceKeys, InputDeviceAnimation[]>,
        selectedBindingControl: undefined as AvailableControls | undefined,
    },
    initCallback: ({inputs, state, updateState, genericDispatch, dispatch, events}) => {
        updateState({id: randomString()});

        const latestResult = inputs.inputHandler.getLastPollResults();
        if (latestResult) {
            const currentDevices = getObjectTypedKeys(latestResult).reduce((accum, key) => {
                const device = latestResult[key]!;
                accum[key] = {
                    deviceKey: device.deviceKey,
                    deviceName: device.deviceName,
                    deviceType: device.deviceType,
                };
                return accum;
            }, {} as Record<PotentialDeviceKeys, BasicInputDevice>);
            updateState({
                currentInputDevices: currentDevices,
            });
        }

        inputs.inputHandler.addEventListener(
            InputDeviceHandlerEventTypeEnum.NewDevicesAdded,
            (event) => {
                const newDevices: typeof state['currentInputDevices'] = event.detail.data.reduce(
                    (accum, newDevice) => {
                        accum[newDevice.deviceKey] = {
                            deviceKey: newDevice.deviceKey,
                            deviceName: newDevice.deviceName,
                            deviceType: newDevice.deviceType,
                        };
                        return accum;
                    },
                    {} as typeof state['currentInputDevices'],
                );
                const devices = {...state.currentInputDevices, ...newDevices};

                const firstNewDevice = getObjectTypedValues(newDevices)[0];

                updateState({
                    currentInputDevices: devices,
                });

                if (firstNewDevice) {
                    dispatch(new events.changeDevice(firstNewDevice));
                }
            },
        );
        inputs.inputHandler.addEventListener(
            InputDeviceHandlerEventTypeEnum.DevicesRemoved,
            (event) => {
                const devices = {...state.currentInputDevices};
                event.detail.data.forEach((removedDevice) => {
                    delete devices[removedDevice.deviceKey];
                });
                updateState({
                    currentInputDevices: devices,
                });
            },
        );
        inputs.inputHandler.addEventListener(
            InputDeviceHandlerEventTypeEnum.CurrentInputsChanged,
            (event) => {
                const newInputs = event.detail.data.newInputs;
                const isTryingToAssign = !!state.selectedBindingControl;
                let inputAccepted = false;

                if (isTryingToAssign) {
                    const inputToAssign = newInputs
                        .filter(
                            (newInput) => newInput.deviceKey === inputs.selectedDevice?.deviceKey,
                        )
                        .filter(
                            (newInput) => Math.abs(newInput.inputValue) > 0.7,
                            // ignore axe inputs for now cause we aren't using them properly
                            // !String(inputToAssign.inputName).startsWith('axe'),
                        )[0];

                    if (inputToAssign) {
                        inputToAssign.inputName;

                        const newBindings: DeviceBindings = {
                            ...(inputs.gameSettings.bindings[inputToAssign.deviceName]?.bindings ??
                                blankBindings),
                            [state.selectedBindingControl]: {
                                inputName: inputToAssign.inputName,
                                direction: inputToAssign.inputValue > 0 ? 1 : -1,
                            },
                        };

                        genericDispatch(
                            new UpdateGameSettingsEvent({
                                ...inputs.gameSettings,
                                bindings: {
                                    ...inputs.gameSettings.bindings,
                                    [inputToAssign.deviceName]: {
                                        deviceName: inputToAssign.deviceName,
                                        bindings: newBindings,
                                    },
                                },
                            }),
                        );
                        inputAccepted = true;
                    }
                }

                const newInputAnimations: InputDeviceAnimation[] = newInputs.map(
                    (newInput): InputDeviceAnimation => {
                        return {
                            deviceKey: newInput.deviceKey,
                            deviceName: newInput.deviceName,
                            timestamp: Date.now(),
                        };
                    },
                );

                const currentAnimations = removeOldAnimations(state.currentInputDeviceAnimations);

                newInputAnimations.forEach((newAnimation) => {
                    if (!currentAnimations[newAnimation.deviceKey]) {
                        currentAnimations[newAnimation.deviceKey] = [];
                    }
                    currentAnimations[newAnimation.deviceKey]!.push(newAnimation);
                });

                updateState({
                    currentInputDeviceAnimations: currentAnimations,
                    ...(inputAccepted
                        ? {
                              selectedBindingControl: undefined,
                          }
                        : {}),
                });
            },
        );
    },
    renderCallback: ({state, updateState, inputs, dispatch, events}) => {
        const currentDevice: BasicInputDevice | undefined =
            inputs.selectedDevice?.deviceKey == undefined
                ? undefined
                : state.currentInputDevices[inputs.selectedDevice.deviceKey] ??
                  state.currentInputDevices[keyboardDeviceKeySymbol];

        if (!currentDevice) {
            return html``;
        }

        return html`
            <h2>Configure Inputs</h2>
            <p>
                Select a device to use.
                <br />
                <br />
                To connect a controller, push buttons on it.
            </p>
            <div class="device-selector-wrapper ${state.selectedBindingControl ? 'blocked' : ''}">
                ${repeat(
                    getObjectTypedValues(state.currentInputDevices)
                        .filter((device) => device.deviceKey !== mouseDeviceKeySymbol)
                        .sort((a, b) => {
                            if (typeof a.deviceKey === 'symbol') {
                                return -1;
                            } else if (typeof b.deviceKey === 'symbol') {
                                return 1;
                            } else {
                                return a.deviceKey - b.deviceKey;
                            }
                        }),
                    (item) => item.deviceKey,
                    (currentDevice) => {
                        const currentDeviceAnimations =
                            state.currentInputDeviceAnimations[currentDevice.deviceKey];
                        return getDeviceSelectorTemplate({
                            inputDevice: currentDevice,
                            animations: currentDeviceAnimations ?? [],
                            selectedCallback: () => {
                                dispatch(new events.changeDevice(currentDevice));
                            },
                            selectedKey: inputs.selectedDevice?.deviceKey,
                            isTopLevel: false,
                        });
                    },
                )}
            </div>
            <div>
                ${getDeviceBindingsTemplate({
                    currentDevice,
                    allBindings: inputs.gameSettings.bindings,
                    currentlySelected: state.selectedBindingControl,
                    selectedCallback: (control) => {
                        updateState({
                            selectedBindingControl: control,
                        });
                    },
                })}
            </div>
            <div>
                <button
                    class="continue-button"
                    ?disabled=${!hasAllBindings(
                        inputs.gameSettings.bindings[currentDevice.deviceName]?.bindings,
                    )}
                    ${listen('click', () => {
                        dispatch(new events.assignmentDone());
                    })}
                >
                    Continue
                </button>
            </div>
        `;
    },
});
