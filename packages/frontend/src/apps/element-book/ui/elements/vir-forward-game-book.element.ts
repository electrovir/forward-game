import {ElementBookApp} from 'element-book';
import {defineElement, html, listen} from 'element-vir';
import {ChangeRouteEvent} from '../../../../router/game-router';
import {ForwardGameRouteEnum, GameFullRoute} from '../../../../router/routes';
import {
    ForwardGamePipeline,
    createForwardGamePipeline,
} from '../../../v1/game-pipeline/forward-game-pipeline';
import {elementBookEntries} from './book-entries';

export const VirForwardGameBook = defineElement<{
    currentRoute: GameFullRoute;
}>()({
    tagName: 'vira-forward-game-book',
    stateInitStatic: {
        gamePipeline: undefined as undefined | ForwardGamePipeline,
    },
    renderCallback({inputs, dispatch, updateState, state}) {
        if (!state.gamePipeline) {
            updateState({
                gamePipeline: createForwardGamePipeline({
                    startImmediately: true,
                }),
            });
        }

        return html`
            <${ElementBookApp.assign({
                entries: elementBookEntries,
                elementBookRoutePaths: inputs.currentRoute.paths.slice(1),
                globalValues: {gamePipeline: state.gamePipeline},
            })}
                ${listen(ElementBookApp.events.pathUpdate, (event) => {
                    const updatedPaths = event.detail;
                    dispatch(
                        new ChangeRouteEvent({
                            route: {
                                paths: [
                                    ForwardGameRouteEnum.Design,
                                    ...updatedPaths,
                                ],
                            },
                            sanitized: false,
                        }),
                    );
                })}
            ></${ElementBookApp}>
        `;
    },
});
