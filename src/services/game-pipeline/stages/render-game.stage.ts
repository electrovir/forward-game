import {createDeferredPromiseWrapper, PartialAndUndefined} from '@augment-vir/common';
import {VirLineStage} from 'vir-line';
import {OptionsState} from '../state/options-state';
import {PlayGameState} from '../state/play-state';
import {
    createDefaultPlayerState,
    finishLineHeight,
    maxPlayers,
    playerSize,
    PlayerState,
} from '../state/player-state';

export type LoadedGraphics = {
    checkerboard: {
        pattern: CanvasPattern;
    };
};

export type RenderGameStageState = PartialAndUndefined<{
    canvas: Pick<HTMLCanvasElement, 'height' | 'width'>;
    playState: PlayGameState;
    renderContext: Pick<
        CanvasRenderingContext2D,
        | 'fillStyle'
        | 'fillRect'
        | 'beginPath'
        | 'fill'
        | 'moveTo'
        | 'lineTo'
        | 'createPattern'
        | 'font'
        | 'fillText'
        | 'textAlign'
    >;
    graphics: PartialAndUndefined<LoadedGraphics>;
}> & {
    options: OptionsState;
};

export const renderGameStage: VirLineStage<RenderGameStageState> = {
    stageId: {
        name: 'render game',
    },
    async executor({state}) {
        const canvas = state.canvas;
        if (!canvas || !state.renderContext) {
            return;
        } else if (!state.playState?.players || !state.playState?.winningPlayers) {
            state.playState = {
                players: {},
                winningPlayers: [],
            };
        }

        // blank out the canvas
        state.renderContext.fillStyle = 'white';
        state.renderContext.fillRect(0, 0, canvas.width, canvas.height);

        // finish line
        if (!state.graphics) {
            state.graphics = {};
        }
        if (!state.graphics.checkerboard) {
            state.graphics.checkerboard = {
                pattern: await createCheckerboardPattern(state.renderContext),
            };
        }

        state.renderContext.fillStyle = state.graphics.checkerboard.pattern;
        state.renderContext.fillRect(0, 0, canvas.width, finishLineHeight);

        // finish line text
        state.renderContext.fillStyle = 'black';
        state.renderContext.font = 'bold 40px sans-serif';
        state.renderContext.textAlign = 'center';
        state.renderContext.fillText('Get here to win', canvas.width / 2, 40);

        // draw players
        const playerCount: number = Math.min(state.options?.playerCount || 1, maxPlayers);

        for (let i = 1; i <= playerCount; i++) {
            const currentPlayerState = state.playState.players[`${i}`];
            const playerState: PlayerState =
                currentPlayerState || createDefaultPlayerState(i, playerCount, canvas);

            if (!currentPlayerState) {
                state.playState.players[`${i}`] = playerState;
            }

            state.renderContext.fillStyle = playerState.color;
            state.renderContext.fillRect(
                playerState.position.x,
                playerState.position.y,
                playerSize,
                playerSize,
            );
        }
    },
};

async function createCheckerboardPattern(
    renderContext: Readonly<Pick<CanvasRenderingContext2D, 'createPattern'>>,
): Promise<CanvasPattern> {
    const image = new Image();

    const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <rect height="10" width="10" x="0" y="0" fill="#ddd" />
        <rect height="10" width="10" x="10" y="10" fill="#ddd" />
    </svg>`;

    image.src = `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;

    const imageLoadDeferral = createDeferredPromiseWrapper<CanvasPattern>();

    image.onload = () => {
        const svgPattern = renderContext.createPattern(image, 'repeat');
        if (svgPattern) {
            imageLoadDeferral.resolve(svgPattern);
        } else {
            imageLoadDeferral.reject(`Failed to create checkerboard canvas pattern.`);
        }
    };

    return imageLoadDeferral.promise;
}
