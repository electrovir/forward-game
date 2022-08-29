import {css, defineElement, defineElementEvent, html} from 'element-vir';
import {areRoutesEqual, SpaRouter} from 'spa-router-vir';
import {
    ForwardGameAppFullRoute,
    ForwardGameAppRoute,
    getForwardGameAppRouter,
} from '../router/app-router';

export const VirForwardGameAppRouting = defineElement<{
    currentRoute: ForwardGameAppFullRoute;
}>()({
    stateInit: {
        router: undefined as any as SpaRouter<ForwardGameAppRoute>,
    },
    styles: css`
        :host {
            display: none;
        }
    `,
    tagName: 'vir-forward-game-app-routing',
    events: {
        routeChange: defineElementEvent<ForwardGameAppFullRoute>(),
    },
    initCallback: ({updateState, dispatch, events}) => {
        const newRouter = getForwardGameAppRouter();
        updateState({
            // created here to ensure that, in tests, each app has a new router instance
            router: newRouter,
        });
        newRouter.addRouteListener(true, (fullRoute) => {
            dispatch(new events.routeChange(fullRoute));
        });
    },
    renderCallback: ({inputs, state}) => {
        if (!areRoutesEqual(inputs.currentRoute, state.router.getCurrentRawRoutes())) {
            state.router.setRoutes(inputs.currentRoute);
        }

        const shouldBeCurrentRoute = runRoutingLogic(inputs.currentRoute);

        if (
            !areRoutesEqual(shouldBeCurrentRoute, inputs.currentRoute) ||
            !areRoutesEqual(shouldBeCurrentRoute, state.router.getCurrentRawRoutes())
        ) {
            state.router.setRoutes(shouldBeCurrentRoute);
            // no need to dispatch an event here, the event listener attached in initCallback will handle that
        }

        return html``;
    },
});

function runRoutingLogic(currentRoute: ForwardGameAppFullRoute): ForwardGameAppFullRoute {
    return currentRoute;
}
