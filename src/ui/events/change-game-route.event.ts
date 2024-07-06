import {defineTypedEvent} from 'element-vir';
import {ForwardGameFullRoute} from '../../services/router/routes';

export const ChangeGameRouteEvent = defineTypedEvent<Partial<ForwardGameFullRoute>>()(
    'change-forward-game-route',
);
