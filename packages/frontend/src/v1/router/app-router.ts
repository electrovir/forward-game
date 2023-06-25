import {isEnumValue} from '@augment-vir/common';
import {defineTypedEvent} from 'element-vir';
import {createSpaRouter, FullRoute, SpaRouter} from 'spa-router-vir';
import {AppRoute} from '../data/app-routes';

export type ForwardGameAppRoute = [AppRoute];

export type ForwardGameAppFullRoute = Required<Readonly<FullRoute<ForwardGameAppRoute>>>;

export const defaultForwardGameAppRoute: ForwardGameAppFullRoute = {
    paths: [AppRoute.AssignControls],
    search: undefined,
    hash: undefined,
};

export function getForwardGameAppRouter(): SpaRouter<ForwardGameAppRoute> {
    return createSpaRouter<ForwardGameAppRoute>({
        maxListenerCount: 1,
        routeBase: 'forward-game/v1',
        routeSanitizer: (route): ForwardGameAppFullRoute => {
            const firstRoute = route.paths[0];

            if (isEnumValue(firstRoute, AppRoute)) {
                return {
                    ...defaultForwardGameAppRoute,
                    paths: [firstRoute],
                };
            } else {
                return defaultForwardGameAppRoute;
            }
        },
    });
}

export const ChangeRouteEvent = defineTypedEvent<ForwardGameAppFullRoute>()('change-route-event');
