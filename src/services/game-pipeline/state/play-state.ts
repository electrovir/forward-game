import {PlayersStates} from './player-state';

export type PlayGameState = {
    players: PlayersStates;
    winningPlayers: string[];
};
