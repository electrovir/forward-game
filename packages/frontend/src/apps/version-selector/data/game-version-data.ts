import {DeclarativeElementDefinition} from 'element-vir';
import {ForwardGameRouteEnum, GameFullRoute, GameVersion} from '../../../router/routes';

export type GameVersionElementDefinition = DeclarativeElementDefinition<
    any,
    {
        currentRoute: GameFullRoute;
    }
>;

export type GameVersionData = {
    loadVersionElement(): Promise<GameVersionElementDefinition>;
    description: string;
};

export type AllGameVersionData = Readonly<Record<GameVersion, GameVersionData>>;

export const gameVersionData: AllGameVersionData = {
    [ForwardGameRouteEnum.Design]: {
        description: 'Individual parts of the UI (for demonstration or testing purposes)',
        async loadVersionElement() {
            return (await import('../../element-book/ui/elements/vir-forward-game-book.element'))
                .VirForwardGameBook;
        },
    },
    [ForwardGameRouteEnum.V1]: {
        description: 'First working version. With controller support!',
        async loadVersionElement() {
            return (await import('../../v1/elements/vir-forward-game-app-v1.element'))
                .VirForwardGameAppV1;
        },
    },
};
