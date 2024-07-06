import {Dimensions} from '@augment-vir/common';

const defaultPlayerColors = [
    'blue',
    'red',
    'green',
    'orange',
    // 'purple',
    // 'yellow',
];

export const maxPlayers = defaultPlayerColors.length;

export const playerSize = 20;

export type PlayerState = {
    position: {
        x: number;
        y: number;
    };
    color: string;
};

export type PlayersStates = {[PlayerPosition in `${number}`]: PlayerState};

export const finishLineHeight = 50;

export function createDefaultPlayerState(
    playerPosition: number,
    playerCount: number,
    canvasSize: Dimensions,
): PlayerState {
    const totalWidth = (playerCount * 2 - 1) * playerSize;

    const startX = (canvasSize.width - totalWidth) / 2;

    return {
        position: {
            x: startX + (playerPosition - 1) * playerSize * 2,
            y: (canvasSize.height - playerSize) / 2,
        },
        color: defaultPlayerColors[playerPosition - 1] || 'black',
    };
}
