import {waitForAnimationFrame} from '@augment-vir/browser';
import {css, defineElement, defineElementEvent, html, listen, renderIf} from 'element-vir';
import {ForwardGamePipeline} from '../game-pipeline/forward-game-pipeline';

export const VirGameV1 = defineElement<{gamePipeline: ForwardGamePipeline}>()({
    tagName: 'vir-game-v1',
    styles: css`
        :host {
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .ship-wrapper,
        .ship {
            height: 10px;
            width: 10px;
        }

        .ship-wrapper {
            position: relative;
        }

        .ship {
            position: absolute;
            background-color: blue;
        }

        .pause-screen {
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .pause-screen,
        .pause-background {
            position: absolute;
            height: 100%;
            width: 100%;
        }

        .pause-background {
            background-color: black;
            opacity: 0.2;
        }

        .pause-info {
            position: relative;
            color: white;
            font-size: 5em;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .victory-location {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3em;
            font-weight: bold;
            color: black;
            max-height: 20%;
            background: repeating-conic-gradient(
                    rgba(0, 0, 0, 0.15) 0% 25%,
                    rgba(255, 255, 255, 0.15) 0% 50%
                )
                50% / 20px 20px;
        }

        .exit-button {
            padding: 8px;
            border-radius: 8px;
            border: 1px solid grey;
            background-color: skyblue;
            cursor: pointer;
        }

        .exit-button:hover {
            background-color: lightblue;
        }
    `,
    stateInitStatic: {
        cleanup: undefined as undefined | (() => void),
        playerPosition: {
            x: 0,
            y: 0,
        },
        isPaused: false,
        haveWon: false,
    },
    events: {
        exit: defineElementEvent<void>(),
        win: defineElementEvent<void>(),
    },
    initCallback({inputs, updateState}) {
        inputs.gamePipeline.addStateListener(
            true,
            [
                'runTime',
                'playerPosition',
            ],
            (playerPosition) => {
                updateState({playerPosition});
            },
        );
        inputs.gamePipeline.addStateListener(
            true,
            [
                'runTime',
                'isPaused',
            ],
            (isPaused) => {
                updateState({isPaused});
            },
        );
        inputs.gamePipeline.addStateListener(
            true,
            [
                'runTime',
                'haveWon',
            ],
            (haveWon) => {
                updateState({haveWon});
            },
        );
    },
    cleanupCallback({state}) {
        state.cleanup?.();
    },
    renderCallback: ({state, dispatch, events, host}) => {
        /** Run this in a timeout so it detects the ship movement after the current render. */
        setTimeout(async () => {
            await waitForAnimationFrame();
            if (!state.haveWon && checkWinCondition(host)) {
                dispatch(new events.win());
            }
        });
        const shouldPause = state.haveWon || state.isPaused;
        const shipStyle = `top: ${state.playerPosition.y}px; left: ${state.playerPosition.x}px`;

        return html`
            ${renderIf(
                shouldPause,
                html`
                    <div class="pause-screen">
                        <div class="pause-background"></div>
                        <div class="pause-info">
                            <span>${state.haveWon ? 'You Win!' : 'Paused'}</span>
                            <button
                                class="exit-button"
                                ${listen('click', () => {
                                    dispatch(new events.exit());
                                })}
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                `,
            )}
            <div class="victory-location">Get here to win!</div>
            <div class="ship-wrapper">
                <div class="ship" style=${shipStyle}></div>
            </div>
        `;
    },
});

function checkWinCondition(host: HTMLElement): boolean {
    const winElement = host.shadowRoot?.querySelector('.victory-location');
    const shipElement = host.shadowRoot?.querySelector('.ship');

    if (!winElement || !shipElement) {
        return false;
    }

    const winBox = winElement.getBoundingClientRect();
    const shipBox = shipElement.getBoundingClientRect();

    return (
        shipBox.left < winBox.right &&
        shipBox.right > winBox.left &&
        shipBox.top < winBox.bottom &&
        shipBox.bottom > winBox.top
    );
}
