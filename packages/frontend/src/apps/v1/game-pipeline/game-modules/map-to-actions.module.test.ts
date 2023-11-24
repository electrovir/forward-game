import {itCases} from '@augment-vir/browser-testing';
import {
    BindingDirectionEnum,
    DevicesToActionNameBindings,
    mapToActionsModule,
} from './map-to-actions.module';

const exampleActionBindings: Readonly<DevicesToActionNameBindings> = {
    keyboard: {
        'button-w': {negative: [], positive: ['up']},
        'button-s': {negative: [], positive: ['down']},
        'button-a': {negative: [], positive: ['left']},
        'button-d': {negative: [], positive: ['right']},
        'button- ': {negative: [], positive: ['pause']},
    },
};

describe(mapToActionsModule.moduleId.name, () => {
    itCases(mapToActionsModule.runModule, [
        {
            it: 'performs no actions if there are no inputs',
            input: {
                executionContext: {},
                gameState: {
                    runTime: {
                        currentActions: [],
                        currentInputs: [],
                    },
                    settings: {
                        actionBindings: exampleActionBindings,
                    },
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
                        currentInputs: [
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button-w',
                                inputValue: 1,
                            },
                        ],
                    },
                    settings: {
                        actionBindings: exampleActionBindings,
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
                        currentActions: [],
                        currentInputs: [
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button-w',
                                inputValue: 1,
                            },
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button-s',
                                inputValue: 1,
                            },
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button-a',
                                inputValue: 1,
                            },
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button-d',
                                inputValue: 1,
                            },
                            {
                                deviceKey: 'keyboard',
                                inputName: 'button- ',
                                inputValue: 1,
                            },
                        ],
                    },
                    settings: {
                        actionBindings: exampleActionBindings,
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
                            },
                            {
                                actionName: 'down',
                                value: 1,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                            },
                            {
                                actionName: 'left',
                                value: 1,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                            },
                            {
                                actionName: 'right',
                                value: 1,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                            },
                            {
                                actionName: 'pause',
                                value: 1,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                            },
                        ],
                    },
                },
            },
        },
    ]);
});
