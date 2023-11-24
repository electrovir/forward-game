import {clamp, isEnumValue, isTruthy, mergeDeep, round} from '@augment-vir/common';
import {GameModule} from 'game-vir';
import {PartialDeep} from 'type-fest';
import {BindingDirectionEnum, GameStateForMappingInputs} from './map-to-actions.module';

export enum GameAction {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
    Pause = 'pause',
}

export type GameStateForActions = GameStateForMappingInputs & {
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

export const defaultBindings = {
    keyboard: {
        'button-w': {
            [BindingDirectionEnum.Positive]: [GameAction.Up],
        },
        'button-s': {
            [BindingDirectionEnum.Positive]: [GameAction.Down],
        },
        'button-a': {
            [BindingDirectionEnum.Positive]: [GameAction.Left],
        },
        'button-d': {
            [BindingDirectionEnum.Positive]: [GameAction.Right],
        },
        'button-Escape': {
            [BindingDirectionEnum.Positive]: [GameAction.Pause],
        },
        'button-ArrowUp': {
            [BindingDirectionEnum.Positive]: [GameAction.Up],
        },
        'button-ArrowDown': {
            [BindingDirectionEnum.Positive]: [GameAction.Down],
        },
        'button-ArrowLeft': {
            [BindingDirectionEnum.Positive]: [GameAction.Left],
        },
        'button-ArrowRight': {
            [BindingDirectionEnum.Positive]: [GameAction.Right],
        },
    },
};

const movementPerMillisecond = 0.24;

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

    const updates: ReadonlyArray<PartialDeep<GameStateForActions>> = [
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
        pauseChange !== undefined && {isPaused: pauseChange},
    ].filter(isTruthy);

    if (!updates.length) {
        return undefined;
    }

    const stateUpdate = mergeDeep(...updates);

    return stateUpdate;
}
