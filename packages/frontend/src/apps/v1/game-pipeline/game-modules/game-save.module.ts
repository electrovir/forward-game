import {MaybePromise, pickObjectKeys} from '@augment-vir/common';
import {GameModule} from 'game-vir';
import localForage from 'localforage-esm';

const gameDb = localForage.createInstance({
    name: 'forward-game',
    storeName: 'forward-game',
});

const savedGameStateKey = 'forward-game-v1-save';

export const defaultSaveAccess = {
    async loadState() {
        return await gameDb.getItem(savedGameStateKey);
    },
    async saveState(gameState: any) {
        gameDb.setItem(savedGameStateKey, gameState);
    },
};

type GameSaveModuleGameState = {
    runTime: {
        initialLoadAttempted: boolean;
        saveNextFrame: boolean;
        lastTimeSaved: {milliseconds: number};
    };
    settings: {
        saveInterval: {milliseconds: number};
    };
};

const gameStatePropertiesToStore: ReadonlyArray<PropertyKey> = ['settings'];

/**
 * Possible improvements:
 *
 * - After saving game state, load it again and verify that it was saved correctly
 * - After loading game state, verify that it matches expected state types
 * - Account for incorrect saved state (override it, wipe it, try to be really smart about it, etc.)
 * - Update save state after a game version upgrade
 * - Store backups of save states
 */
export const gameSaveModule: GameModule<
    GameSaveModuleGameState,
    {
        saveAccess: {
            loadState(): MaybePromise<any>;
            saveState(state: any): MaybePromise<void>;
        };
    }
> = {
    moduleId: {
        name: 'save game',
        version: 1,
    },
    async runModule({gameState, executionContext}) {
        const shouldSave =
            gameState.runTime.lastTimeSaved.milliseconds <
                Date.now() - gameState.settings.saveInterval.milliseconds ||
            gameState.runTime.saveNextFrame;

        if (!gameState.runTime.initialLoadAttempted) {
            /** If initial load hasn't happened yet, do it now. */
            try {
                const loadedGameState: any = await executionContext.saveAccess.loadState();

                if (loadedGameState) {
                    console.info('Loading initial state', loadedGameState);
                    return {
                        stateUpdate: {
                            runTime: {
                                initialLoadAttempted: true,
                            },
                            ...pickObjectKeys<any, any>(
                                loadedGameState,
                                gameStatePropertiesToStore,
                            ),
                        },
                    };
                } else {
                    console.info('No saved game state found.');
                    return {
                        stateUpdate: {
                            runTime: {
                                initialLoadAttempted: true,
                            },
                        },
                    };
                }
            } catch (error) {
                console.error('Failed to load saved game state', error);
                return {
                    stateUpdate: {
                        runTime: {
                            initialLoadAttempted: true,
                        },
                    },
                };
            }
        } else if (shouldSave) {
            /** If it's time to save, do that. */
            try {
                await executionContext.saveAccess.saveState(
                    pickObjectKeys<any, any>(gameState, gameStatePropertiesToStore),
                );

                return {
                    stateUpdate: {
                        runTime: {
                            lastTimeSaved: {
                                milliseconds: Date.now(),
                            },
                            saveNextFrame: false,
                        },
                    },
                };
            } catch (error) {
                console.error('Failed to save game state', error);
            }
        }

        /** Nothing to do. */
        return undefined;
    },
};
