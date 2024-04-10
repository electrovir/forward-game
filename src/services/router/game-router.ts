import {createSpaRouter} from 'spa-router-vir';
import {GameFullRoute, GameRoutePage, GameRoutePath, defaultGameRoute} from './game-routes';

export function createGameRouter() {
    return createSpaRouter<GameRoutePath>({
        routeBase: 'forward-game',
        routeSanitizer(rawRoute): GameFullRoute {
            if (rawRoute.paths[0] === GameRoutePage.Home) {
                return {
                    ...defaultGameRoute,
                    paths: [GameRoutePage.Home],
                };
            } else if (rawRoute.paths[0] === GameRoutePage.Design) {
                return {
                    ...defaultGameRoute,
                    paths: [
                        rawRoute.paths[0],
                        ...rawRoute.paths.slice(1),
                    ],
                };
            } else {
                return defaultGameRoute;
            }
        },
    });
}
