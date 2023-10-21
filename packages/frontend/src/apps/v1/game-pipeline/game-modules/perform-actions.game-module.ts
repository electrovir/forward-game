import {isEnumValue} from '@augment-vir/common';
import {GameModule} from 'game-vir';
import {round} from '../../../../util/number';
import {GameStateForMappingInputs} from './map-inputs-to-actions.game-module';

export enum GameAction {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
    Pause = 'pause',
}

export const defaultPlayerGameState: GameStateForPlayer = {
    playerPosition: {
        x: 0,
        y: 0,
    },
    paused: false,
    win: false,
};

type GameStateForPlayer = {
    playerPosition: {
        x: number;
        y: number;
    };
    paused: boolean;
    win: boolean;
};

export type GameStateForActions = GameStateForMappingInputs & GameStateForPlayer;

export const performActions: GameModule<GameStateForActions> = {
    moduleId: {
        name: 'perform-actions',
        version: 1,
    },
    runModule({gameState, millisecondsSinceLastFrame}) {
        const newPosition = calculateNewPosition(gameState, millisecondsSinceLastFrame);

        if (!newPosition) {
            return undefined;
        }

        return {
            stateChange: {
                playerPosition: newPosition,
            },
        };
    },
};

const movementPerMillisecond = 0.24;

function calculateNewPosition(
    gameState: Pick<GameStateForActions, 'currentActions' | 'playerPosition' | 'win' | 'paused'>,
    millisecondsSinceLastFrame: number,
): GameStateForActions['playerPosition'] | undefined {
    if (gameState.win || gameState.paused) {
        return gameState.playerPosition;
    }

    const fullMovement = movementPerMillisecond * millisecondsSinceLastFrame;

    let verticalMovement = 0;
    let horizontalMovement = 0;

    gameState.currentActions.forEach((currentAction) => {
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
        }
    });

    if (horizontalMovement && verticalMovement) {
        const diagonalMovement = Math.sqrt(
            Math.pow(horizontalMovement, 2) + Math.pow(verticalMovement, 2),
        );

        if (diagonalMovement > fullMovement) {
            verticalMovement = verticalMovement * (fullMovement / diagonalMovement);
            horizontalMovement = horizontalMovement * (fullMovement / diagonalMovement);
        }
    }

    if (!horizontalMovement && !verticalMovement) {
        return undefined;
    }

    return {
        x: gameState.playerPosition.x + horizontalMovement,
        y: gameState.playerPosition.y + verticalMovement,
    };
}
