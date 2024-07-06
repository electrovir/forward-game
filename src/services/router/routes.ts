import {FullRoute} from 'spa-router-vir';

export enum ForwardGamePage {
    Home = 'home',
    Play = 'play',
    Options = 'options',
}

export type ForwardGamePath = [ForwardGamePage];

export type ForwardGameFullRoute = Required<FullRoute<ForwardGamePath, undefined, undefined>>;

export const defaultForwardGameRoute: ForwardGameFullRoute = {
    paths: [ForwardGamePage.Home],
    hash: undefined,
    search: undefined,
};
