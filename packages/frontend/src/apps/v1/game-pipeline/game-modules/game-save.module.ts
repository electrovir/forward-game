import {pickObjectKeys} from '@augment-vir/common';
import {GameModule} from 'game-vir';
import localForage from 'localforage-esm';

localForage.createInstance({
    name: 'forward-game',
});

const savedGameStateKey = 'forward-game-v1-save';

export const defaultSaveGameAccess = {
    async loadState() {
        return await localForage.getItem(savedGameStateKey);
    },
    async saveState(gameState: any) {
        localForage.setItem(savedGameStateKey, gameState);
    },
};

export function createSaveGameModule(propertiesToSave: ReadonlyArray<PropertyKey>) {
    const saveGameModule: GameModule<
        {
            saveInterval: {milliseconds: number};
            initialLoadAttempted: boolean;
            saveNextFrame: boolean;
        },
        {
            lastTimeSaved: {milliseconds: number};
            saveGameAccess: {
                loadState(): Promise<any>;
                saveState(state: any): Promise<any>;
            };
        }
    > = {
        moduleId: {
            name: 'save game',
            version: 1,
        },
        async runModule({gameState, executionContext}) {
            const shouldSave =
                executionContext.lastTimeSaved.milliseconds <
                    Date.now() - gameState.saveInterval.milliseconds || gameState.saveNextFrame;

            if (!gameState.initialLoadAttempted) {
                try {
                    const loadedGameState: any = await executionContext.saveGameAccess.loadState();

                    console.info('Loading initial state', loadedGameState);
                    if (loadedGameState) {
                        return {
                            initialLoadAttempted: true,
                            stateUpdate: {
                                ...pickObjectKeys<any, any>(loadedGameState, propertiesToSave),
                                initialLoadAttempted: true,
                            },
                        };
                    } else {
                        return {
                            stateUpdate: {
                                initialLoadAttempted: true,
                            },
                        };
                    }
                } catch (error) {
                    console.error('Failed to load saved game state', error);
                    return {
                        stateUpdate: {
                            initialLoadAttempted: true,
                        },
                    };
                }
            } else if (shouldSave) {
                try {
                    await executionContext.saveGameAccess.saveState(
                        pickObjectKeys<any, any>(gameState, propertiesToSave),
                    );

                    return {
                        executionContextChange: {
                            lastTimeSaved: {
                                milliseconds: Date.now(),
                            },
                        },
                        stateUpdate: {
                            saveNextFrame: false,
                        },
                    };
                } catch (error) {
                    console.error('Failed to save game state', error);
                }
            }

            return undefined;
        },
    };

    return saveGameModule;
}
