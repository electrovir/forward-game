import {getObjectTypedEntries} from '@augment-vir/common';
import {ReadActionsStageState} from '@game-vir/handle-input';
import {VirLineStage} from 'vir-line';
import {GameAction} from '../state/actions';
import {finishLineHeight, playerSize} from '../state/player-state';
import {RenderGameStageState} from './render-game.stage';

const playerMovement = 0.3;

export type PerformActionsStageState = Pick<RenderGameStageState, 'playState' | 'canvas'> &
    Pick<ReadActionsStageState, 'playersActiveActions'>;

export const performActionsStage: VirLineStage<PerformActionsStageState> = {
    stageId: {
        name: 'perform actions',
    },
    executor({state, timeSinceLastUpdate}) {
        const canvas = state.canvas;

        if (
            !state.playState ||
            !state.playersActiveActions ||
            !canvas ||
            state.playState.winningPlayers?.length
        ) {
            return;
        }

        const winningPlayers: string[] = [];

        // perform all actions
        getObjectTypedEntries(state.playersActiveActions).forEach(
            ([
                playerPosition,
                playerActions,
            ]) => {
                const playerState = state.playState?.players[playerPosition];

                if (!playerState) {
                    return;
                }

                const maxMovement: number = Number(
                    (timeSinceLastUpdate.milliseconds * playerMovement).toFixed(1),
                );

                const movement = {x: 0, y: 0};

                if (playerActions[GameAction.Up]) {
                    movement.y -= maxMovement * (playerActions[GameAction.Up]?.value || 0);
                }
                if (playerActions[GameAction.Down]) {
                    movement.y += maxMovement * (playerActions[GameAction.Down]?.value || 0);
                }
                if (playerActions[GameAction.Left]) {
                    movement.x -= maxMovement * (playerActions[GameAction.Left]?.value || 0);
                }
                if (playerActions[GameAction.Right]) {
                    movement.x += maxMovement * (playerActions[GameAction.Right]?.value || 0);
                }

                if (movement.x && movement.y) {
                    const diagonalMovement = Math.sqrt(
                        Math.pow(movement.x, 2) + Math.pow(movement.y, 2),
                    );

                    movement.y = movement.y * (maxMovement / diagonalMovement);
                    movement.x = movement.x * (maxMovement / diagonalMovement);
                }

                playerState.position.x += movement.x;
                playerState.position.y += movement.y;

                if (playerState.position.x < 0) {
                    playerState.position.x = 0;
                } else if (playerState.position.x > canvas.width - playerSize) {
                    playerState.position.x = canvas.width - playerSize;
                }
                if (playerState.position.y < 0) {
                    playerState.position.y = 0;
                } else if (playerState.position.y > canvas.height - playerSize) {
                    playerState.position.y = canvas.height - playerSize;
                }

                if (playerState.position.y < finishLineHeight) {
                    winningPlayers.push(playerPosition);
                }
            },
        );

        state.playState.winningPlayers = winningPlayers;
    },
};
