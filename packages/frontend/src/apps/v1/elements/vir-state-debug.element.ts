import {defineElement, html} from 'element-vir';
import {ForwardGamePipeline, ForwardGameState} from '../game-pipeline/forward-game-pipeline';

export const VirStateDebug = defineElement<{gamePipeline: ForwardGamePipeline}>()({
    tagName: 'vir-state-debug',
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
    renderCallback({state}) {
        const stringifiedState = JSON.stringify(state.gameState, null, 4);

        return html`
            <pre>${stringifiedState}</pre>
        `;
    },
});
