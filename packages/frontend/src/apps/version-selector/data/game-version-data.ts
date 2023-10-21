import {DeclarativeElementDefinition} from 'element-vir';
import {GameVersionName, gameVersionNames} from '../../../data/versions';
import {GameFullRoute} from '../../../router/game-router';

export type GameVersionElementDefinition = DeclarativeElementDefinition<
    any,
    {currentRoute: GameFullRoute}
>;

export type GameVersionData = {
    loadVersionElement(): Promise<GameVersionElementDefinition>;
    description: string;
};

export type AllGameVersionData = Readonly<Record<GameVersionName, GameVersionData>>;

export const gameVersionData: AllGameVersionData = {
    [gameVersionNames.v1]: {
        description: 'Controller support.',
        async loadVersionElement() {
            return (await import('../../v1/elements/vir-forward-game-app.element'))
                .VirForwardGameAppV1;
        },
    },
};
