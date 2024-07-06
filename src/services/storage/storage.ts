import localForage from 'localforage-esm';
import {assertValidShape, isValidShape} from 'object-shape-tester';
import {defaultPlayersActionsBindingsMap} from '../game-pipeline/state/default-actions-bindings';
import {SavedState, savedStateShape} from './saved-state';

const store = localForage.createInstance({
    description: 'For the game Forward.',
    name: 'forward-game',
    storeName: 'forward-game',
});

const savedStateKey = 'saved-state';

export async function loadSavedState(): Promise<SavedState> {
    const savedState = await store.getItem(savedStateKey);
    if (isValidShape(savedState, savedStateShape)) {
        return savedState as SavedState;
    } else {
        return defaultSavedState;
    }
}

export async function saveState(state: Readonly<SavedState>): Promise<void> {
    const newState = {
        ...((await store.getItem(savedStateKey)) as any),
        ...state,
    };
    assertValidShape(newState, savedStateShape);
    await store.setItem(savedStateKey, newState);
}

const defaultSavedState: SavedState = {
    bindings: {...defaultPlayersActionsBindingsMap},
};
