import {FullRoute} from 'spa-router-vir';

export enum GameRoutePage {
    Design = 'design',
    Home = 'home',
}

export type GameRoutePath = [GameRoutePage.Home] | [GameRoutePage.Design, ...string[]];

export type GameFullRoute = Required<Readonly<FullRoute<GameRoutePath>>>;

export const defaultGameRoute: GameFullRoute = {
    hash: undefined,
    paths: [GameRoutePage.Home],
    search: undefined,
};
