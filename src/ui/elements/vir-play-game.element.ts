import {PartialAndUndefined} from '@augment-vir/common';
import {VirReadActionsStageDebug} from '@game-vir/handle-input';
import {css, defineElement, html, listen, nothing} from 'element-vir';
import {ForwardGamePipeline} from '../../services/game-pipeline/forward-game-pipeline';
import {VirCanvas} from './vir-canvas.element';
import {VirVictory} from './vir-victory.element';

export const VirPlayGame = defineElement<
    {
        gamePipeline: ForwardGamePipeline;
    } & PartialAndUndefined<{
        debug: boolean;
    }>
>()({
    tagName: 'vir-play-game',
    styles: css`
        :host {
            display: block;
            position: relative;
        }

        ${VirReadActionsStageDebug} {
            flex-direction: row;
        }

        ${VirCanvas} {
            border: 1px solid #ccc;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
        }

        .debug {
            opacity: 0.5;
        }

        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10;
            top: 0;
            left: 0;
        }

        .end-game {
            font-size: 48px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            background-color: rgba(255, 255, 255, 0.8);
            animation: 120ms fade-in ease-in forwards;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,
    stateInitStatic: {
        winningPlayers: [] as string[],
        cleanup: undefined as undefined | (() => void),
    },
    initCallback({inputs, updateState}) {
        const unListen = inputs.gamePipeline.listenToState(
            true,
            {
                playState: {
                    winningPlayers: true,
                },
            },
            (winningPlayers) => {
                updateState({winningPlayers: winningPlayers || []});
            },
        );

        updateState({
            cleanup: unListen,
        });
    },
    cleanupCallback({inputs, state, updateState}) {
        inputs.gamePipeline.currentState.canvas = undefined;

        state.cleanup?.();

        updateState({cleanup: undefined});
    },
    renderCallback({inputs, state}) {
        const debugTemplate = inputs.debug
            ? html`
                  <section class="debug overlay">
                      <${VirReadActionsStageDebug.assign({
                          actionBindings: inputs.gamePipeline.currentState.playersActionsBindings,
                      })}></${VirReadActionsStageDebug}>
                  </section>
              `
            : nothing;

        const winCondition = state.winningPlayers.length
            ? html`
                  <div class="end-game overlay">
                      <${VirVictory.assign({winningPlayers: state.winningPlayers})}>
                          >
                      </${VirVictory}>
                  </div>
              `
            : nothing;

        return html`
            ${debugTemplate} ${winCondition}
            <${VirCanvas}
                ${listen(VirCanvas.events.canvasCreate, (event) => {
                    const canvas = event.detail;
                    const renderContext = canvas.getContext('2d');
                    if (!renderContext) {
                        throw new Error('Failed to get 2d render context from canvas element.');
                    }
                    inputs.gamePipeline.currentState.canvas = event.detail;
                    inputs.gamePipeline.currentState.renderContext = renderContext;
                })}
            ></${VirCanvas}>
        `;
    },
});
