import {isEnumValue} from '@augment-vir/common';
import {SpaRouter} from 'spa-router-vir';
import {
    defaultForwardGameRoute,
    ForwardGameFullRoute,
    ForwardGamePage,
    ForwardGamePath,
} from './routes';

export function createForwardGameRouter() {
    return new SpaRouter<ForwardGamePath, undefined, undefined>({
        basePath: 'forward-game',
        sanitizeRoute(rawRoute): ForwardGameFullRoute {
            if (!isEnumValue(rawRoute.paths[0], ForwardGamePage)) {
                return defaultForwardGameRoute;
            }

            return {
                ...defaultForwardGameRoute,
                paths: [rawRoute.paths[0]],
            };
        },
    });
}

export type ForwardGameRouter = ReturnType<typeof createForwardGameRouter>;
