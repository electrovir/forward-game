import {isEnumValue, isLengthAtLeast} from '@augment-vir/common';
import {ForwardGameRouteEnum, GameFullRoute} from '../../../router/routes';

export enum V1RoutesEnum {
    AssignControls = 'assign-controls',
    Play = 'play',
}

const defaultV1Paths = [
    ForwardGameRouteEnum.V1,
    V1RoutesEnum.AssignControls,
] as const;

export function sanitizeV1Route(fullRoute: GameFullRoute): GameFullRoute {
    if (!isLengthAtLeast(fullRoute.paths, 2) || !isEnumValue(fullRoute.paths[1], V1RoutesEnum)) {
        return {
            ...fullRoute,
            paths: defaultV1Paths,
        };
    } else {
        return fullRoute;
    }
}

export function doesRouteNeedSanitization(fullRoute: GameFullRoute): boolean {
    return sanitizeV1Route(fullRoute) !== fullRoute;
}
