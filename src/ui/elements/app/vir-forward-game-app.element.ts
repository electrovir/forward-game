import {extractErrorMessage} from '@augment-vir/common';
import {VirFps} from '@game-vir/render';
import {
    asyncProp,
    css,
    defineElementNoInputs,
    html,
    isAsyncError,
    isResolved,
    listen,
    nothing,
} from 'element-vir';
import {createForwardGameRouter} from '../../../services/router/router';
import {defaultForwardGameRoute, ForwardGamePage} from '../../../services/router/routes';
import {ChangeGameRouteEvent} from '../../events/change-game-route.event';
import {VirLoading} from '../vir-loading.element';
import {VirMainMenu} from '../vir-main-menu.element';
import {VirOptions} from '../vir-options.element';
import {VirPlayGame} from '../vir-play-game.element';

const debug = false;

export const VirForwardGameApp = defineElementNoInputs({
    tagName: 'vir-forward-game-app',
    styles: css`
        :host,
        main {
            display: flex;
            height: 100%;
            width: 100%;
            position: relative;
            background: linear-gradient(158deg, black 0%, #094b79 47%, #33ccff 100%);
        }

        main > * {
            height: 100%;
            width: 100%;
            max-width: 100%;
            max-height: 100%;
            box-sizing: border-box;
        }

        ${VirFps} {
            position: absolute;
            top: 4px;
            left: 6px;
            z-index: 1000;
            text-shadow:
                1px 1px 0 white,
                -1px 1px 0 white,
                -1px -1px 0 white,
                1px -1px 0 white;
        }

        .debug-center {
            position: absolute;
            z-index: 1000000000;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }

        .crosshair {
            border-bottom: 1px solid red;
            border-right: 1px solid red;
            height: 50%;
            width: 50%;
            box-sizing: border-box;
        }
    `,
    stateInitStatic: {
        gamePipeline: asyncProp({
            defaultValue: import('../../../services/game-pipeline/forward-game-pipeline').then(
                (file) => file.createForwardGamePipeline(),
            ),
        }),
        router: createForwardGameRouter(),
        currentRoute: defaultForwardGameRoute,
        cleanup: undefined as undefined | (() => void),
    },
    initCallback({state, updateState}) {
        if (!state.cleanup) {
            const unListen = state.router.listen(true, (newRoute) => {
                updateState({
                    currentRoute: newRoute,
                });
            });

            updateState({
                cleanup() {
                    unListen();
                },
            });
        }
    },
    cleanupCallback({state, updateState}) {
        state.cleanup?.();

        updateState({cleanup: undefined});
    },
    renderCallback({state}) {
        if (!isResolved(state.gamePipeline.value)) {
            return html`
                <${VirLoading}></${VirLoading}>
            `;
        } else if (isAsyncError(state.gamePipeline.value)) {
            return extractErrorMessage(state.gamePipeline.value);
        }

        const pageTemplate =
            state.currentRoute.paths[0] === ForwardGamePage.Home
                ? html`
                      <${VirMainMenu.assign({
                          gamePipeline: state.gamePipeline.value,
                      })}></${VirMainMenu}>
                  `
                : state.currentRoute.paths[0] === ForwardGamePage.Play
                  ? html`
                        <${VirPlayGame.assign({
                            gamePipeline: state.gamePipeline.value,
                            debug,
                        })}></${VirPlayGame}>
                    `
                  : state.currentRoute.paths[0] === ForwardGamePage.Options
                    ? html`
                          <${VirOptions.assign({
                              gamePipeline: state.gamePipeline.value,
                          })}></${VirOptions}>
                      `
                    : 'Missing';

        const debugCenter = debug
            ? html`
                  <div class="debug-center"><div class="crosshair"></div></div>
              `
            : nothing;

        return html`
            <${VirFps.assign({
                virLine: state.gamePipeline.value,
            })}></${VirFps}>
            ${debugCenter}
            <main
                ${listen(ChangeGameRouteEvent, (event) => {
                    state.router.setRoute(event.detail);
                })}
            >
                ${pageTemplate}
            </main>
        `;
    },
});
