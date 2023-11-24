import {asyncProp, css, defineElementNoInputs, html, listen, renderAsync} from 'element-vir';
import {ChangeRouteEvent, getGameRouter} from '../../../router/game-router';
import {
    ForwardGameRouteEnum,
    GameRoutePath,
    defaultGameRoute,
    isGameVersion,
} from '../../../router/routes';
import {VirForwardGameBook} from '../../element-book/ui/elements/vir-forward-game-book.element';
import {gameVersionData} from '../data/game-version-data';
import {VirSelectGameVersion} from './vir-select-game-version.element';

export const VirVersionSelector = defineElementNoInputs({
    tagName: 'vir-version-selector',
    styles: css`
        :host,
        .root {
            position: relative;
            display: block;
            height: 100%;
        }

        .loading {
            opacity: 0;
            animation-name: pulse;
            animation-delay: 1s;
            animation-duration: 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 5em;
        }

        @keyframes pulse {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,
    stateInitStatic: {
        router: getGameRouter(),
        currentRoute: defaultGameRoute,
        currentGameVersionElement: asyncProp({
            async updateCallback({rootPath}: {rootPath: GameRoutePath[0]}) {
                if (!isGameVersion(rootPath)) {
                    return undefined;
                }
                return gameVersionData[rootPath].loadVersionElement();
            },
        }),
    },
    initCallback({state, updateState}) {
        state.router.addRouteListener(true, (newRoute) => {
            updateState({currentRoute: newRoute});
        });
    },
    renderCallback({state}) {
        state.currentGameVersionElement.updateTrigger({
            rootPath: state.currentRoute.paths[0],
        });

        const appTemplate =
            state.currentRoute.paths[0] === ForwardGameRouteEnum.VersionSelector
                ? html`
                      <${VirSelectGameVersion.assign({
                          versionData: gameVersionData,
                          router: state.router,
                      })}></${VirSelectGameVersion}>
                  `
                : state.currentRoute.paths[0] === ForwardGameRouteEnum.Design
                  ? html`
                        <${VirForwardGameBook.assign({
                            currentRoute: state.currentRoute,
                        })}></${VirForwardGameBook}>
                    `
                  : renderAsync(
                        state.currentGameVersionElement,
                        html`
                            <div class="loading">Loading...</div>
                        `,
                        (resolved) => {
                            if (!resolved) {
                                return 'Failed';
                            }

                            return html`
                                <${resolved.assign({
                                    currentRoute: state.currentRoute,
                                })}></${resolved}>
                            `;
                        },
                        (error) => {
                            return html`
                                Failed: ${error.message}
                            `;
                        },
                    );

        return html`
            <div
                class="root"
                ${listen(ChangeRouteEvent, (event) => {
                    state.router.setRoutes(event.detail.route, event.detail.sanitized);
                })}
            >
                ${appTemplate}
            </div>
        `;
    },
});
