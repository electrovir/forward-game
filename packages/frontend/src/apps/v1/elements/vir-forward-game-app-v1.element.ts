import {getEnumTypedValues} from '@augment-vir/common';
import {css, defineElement, html, listen, renderIf} from 'element-vir';
import {ChangeRouteEvent} from '../../../router/game-router';
import {GameFullRoute, gameVersions} from '../../../router/routes';
import {V1RoutesEnum, doesRouteNeedSanitization, sanitizeV1Route} from '../data/v1-routes';
import {
    ForwardGamePipeline,
    createForwardGamePipeline,
    startNewRunGameState,
} from '../game-pipeline/forward-game-pipeline';
import {GameAction} from '../game-pipeline/game-modules/perform-actions.module';
import {VirAssignControlsV1} from './assign-controls/vir-assign-controls-v1.element';
import {VirGameV1} from './vir-game-v1.element';
import {VirStateDebugV1} from './vir-state-debug-v1.element';

export const VirForwardGameAppV1 = defineElement<{
    currentRoute: GameFullRoute;
}>()({
    tagName: 'vir-forward-game-app-v1',
    stateInitStatic: {
        gamePipeline: undefined as undefined | ForwardGamePipeline,
        debug: false,
        cleanup: undefined as undefined | (() => void),
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
        ${VirStateDebugV1} {
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
    initCallback({state, updateState}) {
        if (!state.cleanup) {
            function keydownListener(event: KeyboardEvent) {
                if ((event.key === 'D' || event.key === '∂') && event.altKey) {
                    updateState({debug: !state.debug});
                }
            }

            window.addEventListener('keydown', keydownListener);

            updateState({
                cleanup: () => {
                    window.removeEventListener('keydown', keydownListener);
                },
            });
        }
    },
    cleanupCallback({state}) {
        state.cleanup?.();
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
                    <${VirStateDebugV1.assign({
                        gamePipeline: state.gamePipeline,
                    })}></${VirStateDebugV1}>
                `,
            )}
            <main>
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
                                          runTime: {
                                              haveWon: true,
                                          },
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
                                      stateUpdate: startNewRunGameState,
                                  });
                              })}
                          ></${VirAssignControlsV1}>
                      `}
            </main>
        `;
    },
});
