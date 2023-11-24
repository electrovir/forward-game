import {PickDeep} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {
    CurrentInputsChangedOutput,
    InputDeviceEventTypeEnum,
    TimedEvent,
} from 'input-device-handler';
import {ViraButton} from 'vira';
import {isIgnoredDevice} from '../../data/v1-ignored-devices';
import {ForwardGamePipeline, ForwardGameState} from '../../game-pipeline/forward-game-pipeline';
import {
    DevicesToActionNameBindings,
    determineDirection,
} from '../../game-pipeline/game-modules/map-to-actions.module';
import {VirBindingsTableV1} from './vir-bindings-table-v1.element';
import {VirDeviceListV1} from './vir-device-list-v1.element';

export const VirAssignControlsV1 = defineElement<{
    requiredActionNames: ReadonlyArray<string>;
    gamePipeline: PickDeep<
        ForwardGamePipeline,
        [
            (
                | 'addStateListener'
                | 'removeEventListener'
                | 'update'
                | 'currentExecutionContext'
                | 'currentState'
            ),
            'inputHandler',
        ]
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
        removeInputListeners: undefined as undefined | (() => void),
        currentBindings: {} as DevicesToActionNameBindings,
    },
    initCallback: ({inputs, state, updateState}) => {
        if (!state.removeInputListeners) {
            function newInputListener(
                event: TimedEvent<
                    CurrentInputsChangedOutput,
                    InputDeviceEventTypeEnum.CurrentInputsChanged
                >,
            ) {
                const newInput = event.detail.inputs.newInputs[0];
                const actionNameToAssign: string | undefined = state.listeningForAction?.actionName;

                if (actionNameToAssign && newInput && !isIgnoredDevice(newInput.deviceKey)) {
                    updateState({listeningForAction: undefined});
                    const inputDirection = determineDirection(newInput.inputValue);
                    const existingActionNames =
                        inputs.gamePipeline.currentState.settings.actionBindings[
                            newInput.deviceKey
                        ]?.[newInput.inputName]?.[inputDirection] ?? [];

                    if (existingActionNames.includes(actionNameToAssign)) {
                        return;
                    }

                    inputs.gamePipeline.update({
                        stateUpdate: {
                            runTime: {
                                saveNextFrame: true,
                            },
                            settings: {
                                actionBindings: {
                                    [newInput.deviceKey]: {
                                        [newInput.inputName]: {
                                            [inputDirection]: [
                                                ...existingActionNames,
                                                actionNameToAssign,
                                            ],
                                        },
                                    },
                                },
                            },
                        },
                    });
                }
            }

            /**
             * Listen to the CurrentInputsChanged event on the event handler so we don't catch any
             * controller inputs that are stuck, which would show up in
             * ForwardGameState['currentInputs'].
             */
            inputs.gamePipeline.currentExecutionContext.inputHandler.addEventListener(
                InputDeviceEventTypeEnum.CurrentInputsChanged,
                newInputListener,
            );
            const removeDeviceStateListener = inputs.gamePipeline.addStateListener(
                true,
                [
                    'runTime',
                    'currentDevices',
                ],
                (newValue) => {
                    updateState({currentInputDevices: newValue});
                },
            );
            const removeBindingsStateListener = inputs.gamePipeline.addStateListener(
                true,
                [
                    'settings',
                    'actionBindings',
                ],
                (newValue) => {
                    updateState({currentBindings: newValue});
                },
            );

            updateState({
                removeInputListeners: () => {
                    inputs.gamePipeline.currentExecutionContext.inputHandler.removeEventListener(
                        InputDeviceEventTypeEnum.CurrentInputsChanged,
                        newInputListener,
                    );
                    removeDeviceStateListener();
                    removeBindingsStateListener();
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
                bindings: state.currentBindings,
                requiredActionNames: inputs.requiredActionNames,
            })}
                ${listen(VirBindingsTableV1.events.listenForAction, (event) => {
                    updateState({listeningForAction: event.detail});
                })}
                ${listen(VirBindingsTableV1.events.removeBinding, (event) => {
                    const existingActionNames =
                        inputs.gamePipeline.currentState.settings.actionBindings[
                            event.detail.deviceKey
                        ]?.[event.detail.inputName]?.[event.detail.direction] ?? [];

                    const newActionNames = existingActionNames.filter((existingActionName) => {
                        return existingActionName !== event.detail.actionName;
                    });

                    inputs.gamePipeline.update({
                        stateUpdate: {
                            runTime: {
                                saveNextFrame: true,
                            },
                            settings: {
                                actionBindings: {
                                    [event.detail.deviceKey]: {
                                        [event.detail.inputName]: {
                                            [event.detail.direction]: newActionNames,
                                        },
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
