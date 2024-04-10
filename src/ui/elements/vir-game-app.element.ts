import {ElementBookApp} from 'element-book';
import {defineElementNoInputs, html, listen, perInstance} from 'element-vir';
import {createGameRouter} from '../../services/router/game-router';
import {GameRoutePage, defaultGameRoute} from '../../services/router/game-routes';
import {allBookEntries} from './book-entries';

export const VirGameApp = defineElementNoInputs({
    tagName: 'vir-game-app',
    stateInitStatic: {
        gameRouter: perInstance(createGameRouter),
        currentRoute: defaultGameRoute,
    },
    initCallback({state, updateState}) {
        state.gameRouter.addRouteListener(true, (newRoute) => {
            updateState({currentRoute: newRoute});
        });
    },
    renderCallback({state}) {
        const currentPage = state.currentRoute.paths[0];

        if (currentPage === GameRoutePage.Design) {
            return html`
                <${ElementBookApp.assign({
                    entries: allBookEntries,
                    elementBookRoutePaths: state.currentRoute.paths.slice(1),
                })}
                    ${listen(ElementBookApp.events.pathUpdate, (event) => {
                        state.gameRouter.setRoutes({
                            paths: [
                                GameRoutePage.Design,
                                ...event.detail,
                            ],
                        });
                    })}
                ></${ElementBookApp}>
            `;
        } else {
            return 'hello there';
        }
    },
});
