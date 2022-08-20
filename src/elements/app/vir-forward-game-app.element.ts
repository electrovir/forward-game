import {defineElementNoInputs, html} from 'element-vir';
import {SpaRouter} from 'spa-router-vir';
import {
    defaultForwardGameAppRoute,
    ForwardGameAppRoute,
    getForwardGameAppRouter,
} from '../../router/app-router';

export const VirForwardGameApp = defineElementNoInputs({
    tagName: 'vir-forward-game-app',
    stateInit: {
        stuff: 'hello',
        router: undefined as any as SpaRouter<ForwardGameAppRoute>,
        currentRoute: defaultForwardGameAppRoute,
    },
    initCallback: ({state, updateState}) => {
        updateState({
            router: getForwardGameAppRouter(),
        });
        state.router.addRouteListener(true, (fullRoute) => {
            updateState({
                currentRoute: fullRoute,
            });
        });
    },
    renderCallback: ({state}) => {
        return html`
            hello there: ${state.currentRoute.paths[0]}
        `;
    },
});
