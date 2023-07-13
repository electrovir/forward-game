import {gameVersionNames} from '../../../../data/versions';
import {GameFullRoute} from '../../../../router/game-router';

export enum V2RoutesEnum {
    AssignControls = 'assign-controls',
    Play = 'play',
}

export function sanitizeV2Route(fullRoute: GameFullRoute): GameFullRoute {
    if (fullRoute.paths.length < 2) {
        return {
            ...fullRoute,
            paths: [
                gameVersionNames.v2,
                V2RoutesEnum.AssignControls,
            ],
        };
    } else {
        return fullRoute;
    }
}

export function doesRouteNeedSanitization(fullRoute: GameFullRoute): boolean {
    return sanitizeV2Route(fullRoute) !== fullRoute;
}
