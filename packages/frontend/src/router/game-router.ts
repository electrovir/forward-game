import {defineTypedEvent} from 'element-vir';
import {createSpaRouter, FullRoute} from 'spa-router-vir';
import {GameVersionName, gameVersionNames} from '../data/versions';

export const versionSelectorPath = 'version-selector' as const;

export type GameRoutePath = [GameVersionName, ...string[]] | [typeof versionSelectorPath];

export type GameFullRoute = Required<Readonly<FullRoute<GameRoutePath>>>;

export const defaultGameRoute: GameFullRoute = {
    paths: [versionSelectorPath],
    search: undefined,
    hash: undefined,
};

let routerCreationCount = 0;

export function getGameRouter() {
    routerCreationCount++;

    if (routerCreationCount > 1) {
        throw new Error(`Illegal to create multiple copies of the game router.`);
    }

    const gameRouter = createSpaRouter<GameRoutePath>({
        maxListenerCount: 1,
        routeBase: 'forward-game',
        routeSanitizer(rawRoute): GameFullRoute {
            const firstPath = rawRoute.paths[0];

            if (!firstPath) {
                return defaultGameRoute;
            } else if (firstPath === versionSelectorPath) {
                return {
                    ...rawRoute,
                    paths: [versionSelectorPath],
                };
            } else if (firstPath in gameVersionNames) {
                return rawRoute as GameFullRoute;
            } else {
                return defaultGameRoute;
            }
        },
    });

    return gameRouter;
}

export type GameRouter = ReturnType<typeof getGameRouter>;

export const ChangeRouteEvent = defineTypedEvent<{
    route: Partial<GameFullRoute>;
    /**
     * Indicates that this new route is a sanitized version of the previous route. This results in a
     * route replacement rather than a new route.
     */
    sanitized: boolean;
}>()('change-route-event');
