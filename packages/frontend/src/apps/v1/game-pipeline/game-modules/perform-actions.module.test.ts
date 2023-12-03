import {itCases} from '@augment-vir/browser-testing';
import {mergeDeep} from '@augment-vir/common';
import {BindingDirectionEnum} from './map-to-actions.module';
import {GameAction, movementPerMillisecond, performActionsModule} from './perform-actions.module';

const mockInput: Parameters<typeof performActionsModule.runModule>[0] = {
    executionContext: {},
    gameState: {
        runTime: {
            currentActions: [],
            haveWon: false,
            isPaused: false,
            playerPosition: {
                x: 0,
                y: 0,
            },
        },
    },
    millisecondsSinceLastFrame: 100,
};

describe(performActionsModule.moduleId.name, () => {
    itCases(performActionsModule.runModule, [
        {
            it: 'does nothing if there are no actions',
            input: mockInput,
            expect: undefined,
        },
        {
            it: 'moves the player up',
            input: mergeDeep(mockInput, {
                gameState: {
                    runTime: {
                        currentActions: [
                            {
                                actionName: GameAction.Up,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 50,
                                value: 1,
                            },
                        ],
                    },
                },
            }),
            expect: {
                stateUpdate: {
                    runTime: {
                        playerPosition: {
                            x: 0,
                            y: -100 * movementPerMillisecond,
                        },
                    },
                },
            },
        },
        {
            it: 'pauses the game on first frame of pause action',
            input: mergeDeep(mockInput, {
                gameState: {
                    runTime: {
                        currentActions: [
                            {
                                actionName: GameAction.Pause,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 1,
                                value: 1,
                            },
                        ],
                    },
                },
            }),
            expect: {
                stateUpdate: {
                    runTime: {
                        isPaused: true,
                    },
                },
            },
        },
        {
            it: 'does not pause the game on later frames of pause action',
            input: mergeDeep(mockInput, {
                gameState: {
                    runTime: {
                        currentActions: [
                            {
                                actionName: GameAction.Pause,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 2,
                                value: 1,
                            },
                        ],
                    },
                },
            }),
            expect: undefined,
        },
        {
            it: 'moves player diagonally',
            input: mergeDeep(mockInput, {
                gameState: {
                    runTime: {
                        currentActions: [
                            {
                                actionName: GameAction.Up,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 50,
                                value: 1,
                            },
                            {
                                actionName: GameAction.Right,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 50,
                                value: 1,
                            },
                        ],
                    },
                },
            }),
            expect: {
                stateUpdate: {
                    runTime: {
                        playerPosition: {
                            x: 16.97,
                            y: -16.97,
                        },
                    },
                },
            },
        },
        {
            it: 'moves nowhere if paused',
            input: mergeDeep(mockInput, {
                gameState: {
                    runTime: {
                        isPaused: true,
                        currentActions: [
                            {
                                actionName: GameAction.Up,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 50,
                                value: 1,
                            },
                            {
                                actionName: GameAction.Right,
                                direction: BindingDirectionEnum.Positive,
                                frameCount: 50,
                                value: 1,
                            },
                        ],
                    },
                },
            }),
            expect: undefined,
        },
    ]);
});
