import {itCases} from '@augment-vir/browser-testing';
import {InputDeviceTypeEnum} from 'input-device-handler';
import {BindingDirectionEnum, NamedActionBindingGroups} from './action-binding';
import {GameStateForMappingInputs, mapInputsToActionsModule} from './map-inputs-to-actions.module';

const exampleActionBindingGroups = {
    ['Example Group']: {
        bindings: [
            {
                deviceKey: 'keyboard',
                deviceType: InputDeviceTypeEnum.Keyboard,
                direction: BindingDirectionEnum.Positive,
                inputName: 'button-w',
                actionName: 'up',
            },
            {
                deviceKey: 'keyboard',
                deviceType: InputDeviceTypeEnum.Keyboard,
                direction: BindingDirectionEnum.Positive,
                inputName: 'button-s',
                actionName: 'down',
            },
            {
                deviceKey: 'keyboard',
                deviceType: InputDeviceTypeEnum.Keyboard,
                direction: BindingDirectionEnum.Positive,
                inputName: 'button-a',
                actionName: 'left',
            },
            {
                deviceKey: 'keyboard',
                deviceType: InputDeviceTypeEnum.Keyboard,
                direction: BindingDirectionEnum.Positive,
                inputName: 'button-d',
                actionName: 'right',
            },
            {
                deviceKey: 'keyboard',
                deviceType: InputDeviceTypeEnum.Keyboard,
                direction: BindingDirectionEnum.Positive,
                inputName: 'button- ',
                actionName: 'pause',
            },
        ],
        isDefault: false,
        name: 'Example Groupe',
    },
} as const satisfies Readonly<NamedActionBindingGroups>;

const exampleSettings: Readonly<GameStateForMappingInputs['settings']> = {
    actionBindingGroups: exampleActionBindingGroups,
    selectedBindingGroups: [
        {
            actingPlayerIndex: 0,
            bindingGroupName: exampleActionBindingGroups['Example Group'].name,
        },
    ],
};

describe(mapInputsToActionsModule.moduleId.name, () => {
    itCases(mapInputsToActionsModule.runModule, [
        {
            it: 'performs no actions if there are no inputs',
            input: {
                executionContext: {},
                gameState: {
                    runTime: {
                        gamepadPlayerMapping: [],
                        currentActions: [],
                        currentInputs: [],
                    },
                    settings: exampleSettings,
                },
                millisecondsSinceLastFrame: 0,
            },
            expect: {stateUpdate: {runTime: {currentActions: []}}},
        },
        {
            it: 'performs a single action',
            input: {
                executionContext: {},
                gameState: {
                    runTime: {
                        currentActions: [],
                        gamepadPlayerMapping: [],
                        currentInputs: [
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button-w',
                                inputValue: 1,
                                deviceType: InputDeviceTypeEnum.Keyboard,
                            },
                        ],
                    },
                    settings: exampleSettings,
                },
                millisecondsSinceLastFrame: 0,
            },
            expect: {
                stateUpdate: {
                    runTime: {
                        currentActions: [
                            {
                                actionName: 'up',
                                value: 1,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                                actingPlayerIndex: 0,
                            },
                        ],
                    },
                },
            },
        },
        {
            it: 'maps action to correct player',
            input: {
                executionContext: {},
                gameState: {
                    runTime: {
                        currentActions: [],
                        gamepadPlayerMapping: [],
                        currentInputs: [
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button-w',
                                inputValue: 1,
                                deviceType: InputDeviceTypeEnum.Keyboard,
                            },
                        ],
                    },
                    settings: {
                        ...exampleSettings,
                        selectedBindingGroups: [
                            {
                                actingPlayerIndex: 0,
                                bindingGroupName: 'Missing group',
                            },
                            {
                                actingPlayerIndex: 1,
                                bindingGroupName: exampleActionBindingGroups['Example Group'].name,
                            },
                        ],
                    },
                },
                millisecondsSinceLastFrame: 0,
            },
            expect: {
                stateUpdate: {
                    runTime: {
                        currentActions: [
                            {
                                actionName: 'up',
                                value: 1,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                                actingPlayerIndex: 1,
                            },
                        ],
                    },
                },
            },
        },
        {
            it: 'performs all actions at once',
            input: {
                executionContext: {},
                gameState: {
                    runTime: {
                        gamepadPlayerMapping: [],
                        currentActions: [],
                        currentInputs: [
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button-w',
                                inputValue: 1,
                                deviceType: InputDeviceTypeEnum.Keyboard,
                            },
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button-s',
                                inputValue: 1,
                                deviceType: InputDeviceTypeEnum.Keyboard,
                            },
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button-a',
                                inputValue: 1,
                                deviceType: InputDeviceTypeEnum.Keyboard,
                            },
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button-d',
                                inputValue: 1,
                                deviceType: InputDeviceTypeEnum.Keyboard,
                            },
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button- ',
                                inputValue: 1,
                                deviceType: InputDeviceTypeEnum.Keyboard,
                            },
                        ],
                    },
                    settings: exampleSettings,
                },
                millisecondsSinceLastFrame: 0,
            },
            expect: {
                stateUpdate: {
                    runTime: {
                        currentActions: [
                            {
                                actionName: 'up',
                                value: 1,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                                actingPlayerIndex: 0,
                            },
                            {
                                actionName: 'down',
                                value: 1,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                                actingPlayerIndex: 0,
                            },
                            {
                                actionName: 'left',
                                value: 1,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                                actingPlayerIndex: 0,
                            },
                            {
                                actionName: 'right',
                                value: 1,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                                actingPlayerIndex: 0,
                            },
                            {
                                actionName: 'pause',
                                value: 1,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                                actingPlayerIndex: 0,
                            },
                        ],
                    },
                },
            },
        },
    ]);
});
