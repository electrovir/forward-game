import {gameVersionNames} from '../../../../data/versions';
import {GameFullRoute} from '../../../../router/game-router';

export enum V1RoutesEnum {
    AssignControls = 'assign-controls',
    Play = 'play',
}

export function sanitizeV1Route(fullRoute: GameFullRoute): GameFullRoute {
    if (fullRoute.paths.length < 2) {
        return {
            ...fullRoute,
            paths: [
                gameVersionNames.v1,
                V1RoutesEnum.AssignControls,
            ],
        };
    } else {
        return fullRoute;
    }
}

export function doesRouteNeedSanitization(fullRoute: GameFullRoute): boolean {
    return sanitizeV1Route(fullRoute) !== fullRoute;
}
