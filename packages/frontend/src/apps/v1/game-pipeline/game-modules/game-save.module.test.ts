import {itCases} from '@augment-vir/browser-testing';
import {mergeDeep} from '@augment-vir/common';
import {assert} from '@open-wc/testing';
import {gameSaveModule} from './game-save.module';

async function testRunGameSaveModule(
    ...args: Parameters<(typeof gameSaveModule)['runModule']>
): Promise<Awaited<ReturnType<(typeof gameSaveModule)['runModule']>>> {
    const output = await gameSaveModule.runModule(...args);

    const override: Awaited<ReturnType<(typeof gameSaveModule)['runModule']>> = {
        stateUpdate: {
            runTime: {
                lastTimeSaved: {
                    milliseconds: 5,
                },
            },
        },
    };

    if (output) {
        return mergeDeep(output, override);
    } else {
        return undefined;
    }
}

const testGameState = {
    runTime: {
        initialLoadAttempted: false,
        lastTimeSaved: {milliseconds: 0},
        saveNextFrame: false,
    },
    settings: {
        saveInterval: {milliseconds: Infinity},
    },
} as const;

describe(gameSaveModule.moduleId.name, () => {
    it('saves state for saveNextFrame', async () => {
        let savedState: any = undefined;
        await gameSaveModule.runModule({
            executionContext: {
                saveAccess: {
                    loadState() {
                        return {};
                    },
                    saveState(saveState) {
                        savedState = saveState;
                    },
                },
            },
            gameState: {
                ...testGameState,
                runTime: {
                    ...testGameState.runTime,
                    saveNextFrame: true,
                    initialLoadAttempted: true,
                },
            },
            millisecondsSinceLastFrame: 0,
        });

        assert.deepStrictEqual(
            savedState,
            {
                settings: {
                    saveInterval: {
                        milliseconds: Infinity,
                    },
                },
            },
            'was not saved',
        );
    });

    itCases(testRunGameSaveModule, [
        {
            it: 'loads state if initialLoadAttempted is false',
            input: {
                executionContext: {
                    saveAccess: {
                        loadState() {
                            return {
                                settings: {
                                    derp: 'hi',
                                },
                            };
                        },
                        saveState() {},
                    },
                },
                gameState: testGameState,
                millisecondsSinceLastFrame: 0,
            },
            expect: {
                stateUpdate: {
                    runTime: {
                        initialLoadAttempted: true,
                        lastTimeSaved: {milliseconds: 5},
                    },
                    settings: {
                        derp: 'hi',
                    } as any,
                },
            },
        },
        {
            it: 'ignores load failure',
            input: {
                executionContext: {
                    saveAccess: {
                        loadState() {
                            throw new Error();
                        },
                        saveState() {},
                    },
                },
                gameState: testGameState,
                millisecondsSinceLastFrame: 0,
            },
            expect: {
                stateUpdate: {
                    runTime: {
                        initialLoadAttempted: true,
                        lastTimeSaved: {milliseconds: 5},
                    },
                },
            },
        },
    ]);
});
