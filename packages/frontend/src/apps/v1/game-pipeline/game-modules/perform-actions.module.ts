import {PickDeep, clamp, isEnumValue, isTruthy, mergeDeep, round} from '@augment-vir/common';
import {GameModule} from 'game-vir';
import {PartialDeep} from 'type-fest';
import {GameStateForMappingInputs} from './map-to-actions.module';

export enum GameAction {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
    Pause = 'pause',
}

export type GameStateForActions = PickDeep<
    GameStateForMappingInputs,
    ['runTime', 'currentActions']
> & {
    runTime: {
        playerPosition: {
            x: number;
            y: number;
        };
        isPaused: boolean;
        haveWon: boolean;
    };
};

export const performActionsModule: GameModule<GameStateForActions> = {
    moduleId: {
        name: 'perform-actions',
        version: 1,
    },
    runModule({gameState, millisecondsSinceLastFrame}) {
        const stateUpdate = calculateNewState(gameState, millisecondsSinceLastFrame);

        if (!stateUpdate) {
            return undefined;
        }

        return {
            stateUpdate,
        };
    },
};

export const movementPerMillisecond = 0.24;

function calculateNewState(
    gameState: GameStateForActions,
    millisecondsSinceLastFrame: number,
): PartialDeep<GameStateForActions> | undefined {
    if (gameState.runTime.haveWon) {
        return undefined;
    }

    const fullMovement = movementPerMillisecond * millisecondsSinceLastFrame;

    let verticalMovement = 0;
    let horizontalMovement = 0;
    let pauseChange: boolean | undefined = undefined;

    gameState.runTime.currentActions.forEach((currentAction) => {
        if (!isEnumValue(currentAction.actionName, GameAction)) {
            return;
        } else if (currentAction.actionName === GameAction.Down) {
            verticalMovement += round({
                number: Math.min(currentAction.value, 1) * fullMovement,
                digits: 1,
            });
        } else if (currentAction.actionName === GameAction.Up) {
            verticalMovement -= round({
                number: Math.min(currentAction.value, 1) * fullMovement,
                digits: 1,
            });
        } else if (currentAction.actionName === GameAction.Right) {
            horizontalMovement += round({
                number: Math.min(currentAction.value, 1) * fullMovement,
                digits: 1,
            });
        } else if (currentAction.actionName === GameAction.Left) {
            horizontalMovement -= round({
                number: Math.min(currentAction.value, 1) * fullMovement,
                digits: 1,
            });
        } else if (
            currentAction.actionName === GameAction.Pause &&
            currentAction.frameCount === 1
        ) {
            pauseChange = !gameState.runTime.isPaused;
        }
    });

    horizontalMovement = clamp({
        value: horizontalMovement,
        max: fullMovement,
        min: -1 * fullMovement,
    });
    verticalMovement = clamp({value: verticalMovement, max: fullMovement, min: -1 * fullMovement});

    if (horizontalMovement && verticalMovement) {
        const diagonalMovement = Math.sqrt(
            Math.pow(horizontalMovement, 2) + Math.pow(verticalMovement, 2),
        );

        if (diagonalMovement > fullMovement) {
            verticalMovement = verticalMovement * (fullMovement / diagonalMovement);
            horizontalMovement = horizontalMovement * (fullMovement / diagonalMovement);
        }
    }
    const hasMovement = horizontalMovement || verticalMovement;

    const maybeUpdates: ReadonlyArray<PartialDeep<GameStateForActions> | false | undefined | 0> = [
        !gameState.runTime.isPaused &&
            hasMovement && {
                runTime: {
                    playerPosition: {
                        x: round({
                            number: gameState.runTime.playerPosition.x + horizontalMovement,
                            digits: 2,
                        }),
                        y: round({
                            number: gameState.runTime.playerPosition.y + verticalMovement,
                            digits: 2,
                        }),
                    },
                },
            },
        pauseChange !== undefined && {runTime: {isPaused: pauseChange}},
    ];

    const updates = maybeUpdates.filter(isTruthy);

    if (!updates.length) {
        return undefined;
    }

    const stateUpdate = mergeDeep(...updates);

    return stateUpdate;
}
