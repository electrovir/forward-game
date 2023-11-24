import {itCases} from '@augment-vir/browser-testing';
import {omitObjectKeys} from '@augment-vir/common';
import {keyboardBaseDevice, mouseBaseDevice} from 'input-device-handler';
import {defaultGameStateForReadingInputs, readInputsModule} from './read-inputs.module';

describe(readInputsModule.moduleId.name, () => {
    itCases(readInputsModule.runModule, [
        {
            it: 'changes nothing if there are no devices or inputs',
            input: {
                executionContext: {
                    inputHandler: {
                        readAllDevices() {
                            return {};
                        },
                    },
                },
                gameState: {
                    ...defaultGameStateForReadingInputs,
                },
                millisecondsSinceLastFrame: 0,
            },
            expect: undefined,
        },
        {
            it: 'adds new devices',
            input: {
                executionContext: {
                    inputHandler: {
                        readAllDevices() {
                            return {
                                keyboard: {
                                    ...omitObjectKeys(keyboardBaseDevice, ['deviceDetails']),
                                    currentInputs: {},
                                },
                                mouse: {
                                    ...omitObjectKeys(mouseBaseDevice, ['deviceDetails']),
                                    currentInputs: {},
                                },
                            };
                        },
                    },
                },
                gameState: {
                    ...defaultGameStateForReadingInputs,
                },
                millisecondsSinceLastFrame: 0,
            },
            expect: {
                stateUpdate: {
                    currentDevices: [
                        omitObjectKeys(keyboardBaseDevice, ['deviceDetails']),
                        omitObjectKeys(mouseBaseDevice, ['deviceDetails']),
                    ],
                },
            },
        },
        {
            it: 'reads inputs',
            input: {
                executionContext: {
                    inputHandler: {
                        readAllDevices() {
                            return {
                                keyboard: {
                                    ...omitObjectKeys(keyboardBaseDevice, ['deviceDetails']),
                                    currentInputs: {
                                        'button-a': {
                                            deviceKey: 'keyboard',
                                            inputName: 'button-a',
                                            inputValue: 1,
                                        },
                                    },
                                },
                                mouse: {
                                    ...omitObjectKeys(mouseBaseDevice, ['deviceDetails']),
                                    currentInputs: {
                                        'button-1': {
                                            deviceKey: 'mouse',
                                            inputName: 'button-1',
                                            inputValue: 1,
                                        },
                                    },
                                },
                            };
                        },
                    },
                },
                gameState: {
                    ...defaultGameStateForReadingInputs,
                },
                millisecondsSinceLastFrame: 0,
            },
            expect: {
                stateUpdate: {
                    currentDevices: [
                        omitObjectKeys(keyboardBaseDevice, ['deviceDetails']),
                        omitObjectKeys(mouseBaseDevice, ['deviceDetails']),
                    ],
                    currentInputs: [
                        {
                            deviceKey: 'keyboard',
                            inputName: 'button-a',
                            inputValue: 1,
                        },
                        {
                            deviceKey: 'mouse',
                            inputName: 'button-1',
                            inputValue: 1,
                        },
                    ],
                },
            },
        },
    ]);
});
