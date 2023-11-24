import {mergeDeep} from '@augment-vir/common';
import {defineElement, html, listen} from 'element-vir';
import {
    ForwardGamePipeline,
    ForwardGameState,
    resetToDefaultsGameState,
} from '../game-pipeline/forward-game-pipeline';

export const VirStateDebugV1 = defineElement<{gamePipeline: ForwardGamePipeline}>()({
    tagName: 'vir-state-debug-v1',
    stateInitStatic: {
        cleanupCallback: undefined as undefined | (() => void),
        gameState: undefined as undefined | ForwardGameState,
    },
    initCallback({inputs, updateState, state}) {
        if (!state.cleanupCallback) {
            const cleanupCallback = inputs.gamePipeline.addWholeStateListener(true, (gameState) => {
                updateState({gameState});
            });
            updateState({
                cleanupCallback,
            });
        }
    },
    cleanupCallback({state}) {
        state.cleanupCallback?.();
    },
    renderCallback({state, inputs}) {
        const stringifiedState = JSON.stringify(state.gameState, null, 4);

        return html`
            <button
                ${listen('click', () => {
                    inputs.gamePipeline.update({stateUpdate: {settings: undefined} as any});
                    inputs.gamePipeline.update({
                        stateUpdate: mergeDeep<ForwardGameState>(resetToDefaultsGameState, {
                            runTime: {
                                saveNextFrame: true,
                            },
                        }),
                    });
                })}
            >
                Reset Settings
            </button>
            <pre>${stringifiedState}</pre>
        `;
    },
});
