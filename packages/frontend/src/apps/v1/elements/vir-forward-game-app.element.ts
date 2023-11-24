import {getEnumTypedValues} from '@augment-vir/common';
import {css, defineElement, html, listen, renderIf} from 'element-vir';
import {ChangeRouteEvent} from '../../../router/game-router';
import {GameFullRoute, gameVersions} from '../../../router/routes';
import {V1RoutesEnum, doesRouteNeedSanitization, sanitizeV1Route} from '../data/routing/v1-routes';
import {
    ForwardGamePipeline,
    createForwardGamePipeline,
} from '../game-pipeline/forward-game-pipeline';
import {GameAction} from '../game-pipeline/game-modules/perform-actions.module';
import {BreakingErrorEvent} from './global-events/breaking-error.event';
import {VirAssignControlsV1} from './route-pages/assign-controls/vir-assign-controls-v1.element';
import {VirGameV1} from './route-pages/game/vir-game.element';
import {VirStateDebug} from './vir-state-debug.element';

export const VirForwardGameAppV1 = defineElement<{
    currentRoute: GameFullRoute;
}>()({
    tagName: 'vir-forward-game-app-v1',
    stateInitStatic: {
        gamePipeline: undefined as undefined | ForwardGamePipeline,
        debug: false,
    },
    styles: css`
        :host,
        main {
            width: 100%;
            height: 100%;
            position: relative;
        }
        main {
            display: flex;
            flex-direction: column;
        }
        main > * {
            flex-grow: 1;
        }
        ${VirStateDebug} {
            position: absolute;
            top: 0;
            left: 0;
            background-color: white;
            border: 1px solid black;
            max-height: 90vh;
            overflow-y: auto;
            overflow-x: hidden;
            padding-right: 20px;
            z-index: 999999999;
        }
    `,
    cleanupCallback({state}) {
        state.gamePipeline?.destroy();
    },
    renderCallback({state, updateState, inputs, dispatch}) {
        if (inputs.currentRoute.paths[0] !== gameVersions.v1) {
            return '';
        } else if (doesRouteNeedSanitization(inputs.currentRoute)) {
            dispatch(
                new ChangeRouteEvent({
                    route: sanitizeV1Route(inputs.currentRoute),
                    sanitized: true,
                }),
            );
            return '';
        }

        if (!state.gamePipeline) {
            setTimeout(() => {
                updateState({
                    gamePipeline: createForwardGamePipeline({
                        startImmediately: true,
                        // delay: {milliseconds: 100},
                    }),
                });
            }, 0);
            return '';
        }

        const showGame = !!(inputs.currentRoute.paths[1] === V1RoutesEnum.Play);

        return html`
            ${renderIf(
                state.debug,
                html`
                    <${VirStateDebug.assign({
                        gamePipeline: state.gamePipeline,
                    })}></${VirStateDebug}>
                `,
            )}
            <main
                ${listen(BreakingErrorEvent, (event) => {
                    console.error(event.detail);
                })}
            >
                ${showGame
                    ? html`
                          <${VirGameV1.assign({gamePipeline: state.gamePipeline})}
                              ${listen(VirGameV1.events.exit, () => {
                                  dispatch(
                                      new ChangeRouteEvent({
                                          route: {
                                              paths: [
                                                  gameVersions.v1,
                                                  V1RoutesEnum.AssignControls,
                                              ],
                                          },
                                          sanitized: false,
                                      }),
                                  );
                              })}
                              ${listen(VirGameV1.events.win, () => {
                                  state.gamePipeline?.update({
                                      stateUpdate: {
                                          haveWon: true,
                                      },
                                  });
                              })}
                          ></${VirGameV1}>
                      `
                    : html`
                          <${VirAssignControlsV1.assign({
                              gamePipeline: state.gamePipeline,
                              requiredActionNames: getEnumTypedValues(GameAction),
                          })}
                              ${listen(VirAssignControlsV1.events.assignmentDone, () => {
                                  dispatch(
                                      new ChangeRouteEvent({
                                          route: {
                                              paths: [
                                                  gameVersions.v1,
                                                  V1RoutesEnum.Play,
                                              ],
                                          },
                                          sanitized: false,
                                      }),
                                  );
                                  state.gamePipeline?.update({
                                      stateUpdate: {
                                          isPaused: false,
                                          haveWon: false,
                                          playerPosition: {
                                              x: 0,
                                              y: 0,
                                          },
                                      },
                                  });
                              })}
                          ></${VirAssignControlsV1}>
                      `}
            </main>
        `;
    },
});
