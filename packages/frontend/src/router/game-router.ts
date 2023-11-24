import {defineTypedEvent} from 'element-vir';
import {createSpaRouter} from 'spa-router-vir';
import {
    ForwardGameRouteEnum,
    GameFullRoute,
    GameRoutePath,
    defaultGameRoute,
    gameVersions,
} from './routes';

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
            } else if (firstPath === ForwardGameRouteEnum.VersionSelector) {
                return {
                    ...rawRoute,
                    paths: [ForwardGameRouteEnum.VersionSelector],
                };
            } else if (firstPath in gameVersions) {
                return rawRoute as GameFullRoute;
            } else if (firstPath === ForwardGameRouteEnum.Design) {
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
