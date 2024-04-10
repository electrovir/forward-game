import {PickDeep, areJsonEqual} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {DeviceHandlerEventTypeEnum, InputDeviceTypeEnum} from 'input-device-handler';
import {ViraButton} from 'vira';
import {isIgnoredDevice} from '../../data/v1-ignored-devices';
import {ForwardGamePipeline, ForwardGameState} from '../../game-pipeline/forward-game-pipeline';
import {
    ActionBinding,
    ActionBindingGroup,
} from '../../game-pipeline/game-modules/inputs/action-binding';
import {defaultBindingSets} from '../../game-pipeline/game-modules/inputs/default-binding-sets';
import {
    determineDirection,
    getMappedPlayerIndexForDevice,
} from '../../game-pipeline/game-modules/inputs/map-inputs-to-actions.module';
import {VirBindingsTableV1} from './vir-bindings-table-v1.element';
import {VirDeviceListV1} from './vir-device-list-v1.element';

export const VirAssignControlsV1 = defineElement<{
    requiredActionNames: ReadonlyArray<string>;
    gamePipeline: PickDeep<
        ForwardGamePipeline,
        ['listenToState' | 'update' | 'currentExecutionContext' | 'currentState', 'inputHandler']
    >;
}>()({
    tagName: 'vir-assign-controls-v1',
    hostClasses: {
        'vir-assign-controls-v1-listening-for-action': ({state}) => !!state.listeningForAction,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 32px;
            text-align: center;
            position: relative;
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

        ${VirBindingsTableV1} {
            margin-top: 16px;
            width: 100%;
            max-width: 1000px;
        }

        .listening-for-action-name {
            /* Set to display: flex in a host class. */
            display: none;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999999;
        }

        .listening-for-action-name p {
            display: flex;
            border: 4px solid grey;
            box-sizing: border-box;
            padding: 64px;
            max-width: 100%;
            background-color: white;
            border-radius: 16px;
        }

        ${hostClasses['vir-assign-controls-v1-listening-for-action']
            .selector} > *:not(.listening-for-action-name) {
            opacity: 0.2;
        }
        ${hostClasses['vir-assign-controls-v1-listening-for-action']
            .selector} .listening-for-action-name {
            display: flex;
        }
    `,
    events: {
        assignmentDone: defineElementEvent<void>(),
    },
    stateInitStatic: {
        listeningForAction: undefined as undefined | {actionName: string},
        currentInputDevices: [] as ForwardGameState['runTime']['currentDevices'],
        cleanup: undefined as undefined | (() => void),
        selectedActionBindingGroupName: defaultBindingSets.default.name,
    },
    initCallback({inputs, state, updateState}) {
        if (!state.cleanup) {
            const cleanupCallbacks = [
                /**
                 * Listen to the `CurrentInputsChanged` event on the event handler so we don't catch
                 * any controller inputs that are stuck, which would show up in
                 * `ForwardGameState['currentInputs']`.
                 */
                inputs.gamePipeline.currentExecutionContext.inputHandler.listen(
                    DeviceHandlerEventTypeEnum.CurrentInputsChanged,
                    (event) => {
                        const selectedBindingGroup: ActionBindingGroup =
                            inputs.gamePipeline.currentState.settings.actionBindingGroups[
                                state.selectedActionBindingGroupName
                            ] ?? defaultBindingSets.default;
                        const newInput = event.detail.inputs.newInputs.sort(
                            (a, b) => a.inputValue - b.inputValue,
                        )[0];
                        const actionNameToAssign: string | undefined =
                            state.listeningForAction?.actionName;

                        if (
                            actionNameToAssign &&
                            newInput &&
                            !isIgnoredDevice(newInput.deviceKey) &&
                            !selectedBindingGroup.isDefault
                        ) {
                            const currentDevice =
                                inputs.gamePipeline.currentState.runTime.currentDevices[
                                    newInput.deviceKey
                                ];

                            if (!currentDevice) {
                                throw new Error(
                                    `Got an input from device '${newInput.deviceKey}' but no device existed at that key.`,
                                );
                            }

                            const inputPlayerIndex: number = getMappedPlayerIndexForDevice(
                                currentDevice,
                                inputs.gamePipeline.currentState.runTime.gamepadPlayerMapping,
                            );

                            updateState({listeningForAction: undefined});
                            const inputDirection = determineDirection(newInput.inputValue);
                            const newActionBinding: ActionBinding =
                                currentDevice.deviceType === InputDeviceTypeEnum.Gamepad
                                    ? {
                                          actionName: actionNameToAssign,
                                          deviceType: currentDevice.deviceType,
                                          direction: inputDirection,
                                          gamepadLayoutInputName:
                                              currentDevice.gamepadLayout?.inputMappings?.[
                                                  newInput.inputName
                                              ],
                                          gamepadModelName: currentDevice.gamepadModel,
                                          gamepadName: currentDevice.deviceName,
                                          inputName: newInput.inputName,
                                          inputPlayerIndex,
                                      }
                                    : {
                                          actionName: actionNameToAssign,
                                          deviceKey: currentDevice.deviceKey,
                                          deviceType: currentDevice.deviceType,
                                          direction: inputDirection,
                                          inputName: newInput.inputName,
                                          inputPlayerIndex,
                                      };
                            const existingBinding = selectedBindingGroup.bindings.find(
                                (binding) => {
                                    return areJsonEqual(newActionBinding, binding);
                                },
                            );

                            /** Nothing to do because the new binding already exactly exists. */
                            if (existingBinding) {
                                return;
                            }

                            inputs.gamePipeline.update({
                                stateUpdate: {
                                    runTime: {
                                        saveNextFrame: true,
                                    },
                                    settings: {
                                        actionBindingGroups: {
                                            [state.selectedActionBindingGroupName]: {
                                                bindings:
                                                    selectedBindingGroup.bindings.concat(
                                                        newActionBinding,
                                                    ),
                                            },
                                        },
                                    },
                                },
                            });
                        }
                    },
                ),
                inputs.gamePipeline.listenToState(
                    true,
                    [
                        'runTime',
                        'currentDevices',
                    ],
                    (newValue) => {
                        updateState({currentInputDevices: newValue});
                    },
                ),
                // inputs.gamePipeline.listenToState(
                //     true,
                //     [
                //         'settings',
                //         'actionBindings',
                //     ],
                //     (newValue) => {
                //         updateState({currentBindings: newValue});
                //     },
                // ),
            ];

            updateState({
                cleanup: () => {
                    cleanupCallbacks.forEach((cleanupCallback) => cleanupCallback());
                },
            });
        }
    },
    renderCallback: ({state, updateState, inputs, events, dispatch}) => {
        const showListeningForTemplate = state.listeningForAction
            ? html`
                  <div class="listening-for-action-name">
                      <p>Press input for "${state.listeningForAction.actionName}"</p>
                  </div>
              `
            : '';

        const selectedBindingGroup: ActionBindingGroup =
            inputs.gamePipeline.currentState.settings.actionBindingGroups[
                state.selectedActionBindingGroupName
            ] ?? defaultBindingSets.default;

        return html`
            ${showListeningForTemplate}
            <header>
                <h2>Configure Inputs</h2>
                <p>To connect a controller, push buttons on it.</p>
            </header>
            <h3>Available input devices</h3>
            <${VirDeviceListV1.assign({
                showAnimations: true,
                devices: state.currentInputDevices,
                inputHandler: inputs.gamePipeline.currentExecutionContext.inputHandler,
            })}></${VirDeviceListV1}>
            <${VirBindingsTableV1.assign({
                bindingGroup: selectedBindingGroup,
                requiredActionNames: inputs.requiredActionNames,
                showBindingsForUnconnectedGamepads: false,
            })}
                ${listen(VirBindingsTableV1.events.listenForAction, (event) => {
                    if (selectedBindingGroup.isDefault) {
                        return;
                    }
                    updateState({listeningForAction: event.detail});
                })}
                ${listen(VirBindingsTableV1.events.removeBinding, (event) => {
                    if (selectedBindingGroup.isDefault) {
                        return;
                    }

                    const newActionBindings =
                        inputs.gamePipeline.currentState.settings.actionBindingGroups[
                            state.selectedActionBindingGroupName
                        ]?.bindings?.filter((currentBinding) => {
                            return !areJsonEqual(currentBinding, event.detail);
                        });

                    if (!newActionBindings) {
                        return;
                    }

                    inputs.gamePipeline.update({
                        stateUpdate: {
                            runTime: {
                                saveNextFrame: true,
                            },
                            settings: {
                                actionBindingGroups: {
                                    [state.selectedActionBindingGroupName]: {
                                        bindings: newActionBindings,
                                    },
                                },
                            },
                        },
                    });
                })}
            ></${VirBindingsTableV1}>
            <${ViraButton.assign({text: 'Play'})}
                ${listen('click', () => {
                    dispatch(new events.assignmentDone());
                })}
            ></${ViraButton}>
        `;
    },
});
