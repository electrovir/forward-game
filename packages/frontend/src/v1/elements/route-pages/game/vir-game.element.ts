import {typedHasProperty} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {InputDeviceHandler, InputDeviceHandlerEventTypeEnum} from 'input-device-handler';
import {BasicInputDevice} from '../../../data/basic-input-device';
import {GameLoopHandler} from '../../../data/game-loop';
import {ReadInputsOutput, readInputs} from '../../../data/read-inputs';
import {ForwardGameSettings} from '../../../data/settings/game-settings-type';
import {AvailableControls} from '../../../data/settings/input-binding-settings';
import {BreakingErrorEvent} from '../../global-events/breaking-error.event';

type GameInputs = {
    gameSettings: ForwardGameSettings;
    selectedDevice: BasicInputDevice;
    inputHandler: InputDeviceHandler;
};

type GamePosition = {
    x: number;
    y: number;
};

export const VirGame = defineElement<GameInputs>()({
    tagName: 'vir-game',
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
        currentControls: {} as ReadInputsOutput,
        currentPosition: {
            x: 0,
            y: 0,
        } as GamePosition,
        paused: false,
        gameLoop: new GameLoopHandler(),
        timestamp: 0,
        win: false,
    },
    events: {
        exit: defineElementEvent<void>(),
    },
    initCallback: ({inputs, state, updateState, dispatch}) => {
        state.gameLoop.addLoopCallback((_, timestamp) => {
            updateState({timestamp});
        });

        inputs.inputHandler.addEventListener(
            InputDeviceHandlerEventTypeEnum.CurrentInputsChanged,
            (event) => {
                const currentInputs = event.detail.data.allCurrentInputs;
                const newInputs = event.detail.data.newInputs;

                const currentBindings =
                    inputs.gameSettings.bindings[inputs.selectedDevice.deviceName]?.bindings;

                if (!currentBindings) {
                    dispatch(
                        new BreakingErrorEvent(
                            new Error(
                                `current bindings for "${inputs.selectedDevice.deviceName}" not found.`,
                            ),
                        ),
                    );
                    return;
                }

                const currentControls = readInputs(
                    inputs.selectedDevice.deviceKey,
                    currentInputs,
                    currentBindings,
                );

                const newControls = readInputs(
                    inputs.selectedDevice.deviceKey,
                    newInputs,
                    currentBindings,
                );

                const paused = newControls.hasOwnProperty(AvailableControls.Pause)
                    ? !state.paused
                    : state.paused;

                updateState({
                    currentControls,
                    paused,
                });
            },
        );
    },
    renderCallback: ({state, updateState, inputs, dispatch, events, host}) => {
        const newPosition = getNewPosition(state.currentControls, state.currentPosition);

        const isWithinWinCondition = checkWinCondition(host);
        if (isWithinWinCondition) {
            updateState({win: true});
        }

        const shouldPause = state.win || state.paused;
        const shipStyle = `top: ${state.currentPosition.y}px; left: ${state.currentPosition.x}px`;
        const pauseStyle = shouldPause ? '' : 'display: none;';
        const pauseText = state.win ? 'You Win!' : 'Paused';
        const exitButtonStyle = state.win ? '' : 'display: none;';

        if (!shouldPause) {
            updateState({
                currentPosition: newPosition,
            });
        }

        return html`
            <div class="pause-screen" style=${pauseStyle}>
                <div class="pause-background"></div>
                <div class="pause-info">
                    <span>${pauseText}</span>
                    <button
                        class="exit-button"
                        style=${exitButtonStyle}
                        ${listen('click', () => {
                            dispatch(new events.exit());
                        })}
                    >
                        Exit
                    </button>
                </div>
            </div>
            <div class="victory-location">Get here to win!</div>
            <div class="ship-wrapper">
                <div class="ship" style=${shipStyle}></div>
            </div>
        `;
    },
});

const fullMovement = 4;

function getNewPosition(controls: ReadInputsOutput, currentPosition: GamePosition) {
    let verticalMovement = 0;
    let horizontalMovement = 0;

    if (typedHasProperty(controls, AvailableControls.Down)) {
        verticalMovement += Math.min(controls[AvailableControls.Down]!, 1) * fullMovement;
    }
    if (typedHasProperty(controls, AvailableControls.Up)) {
        verticalMovement -= Math.min(controls[AvailableControls.Up]!, 1) * fullMovement;
    }

    if (typedHasProperty(controls, AvailableControls.Right)) {
        horizontalMovement += Math.min(controls[AvailableControls.Right]!, 1) * fullMovement;
    }
    if (typedHasProperty(controls, AvailableControls.Left)) {
        horizontalMovement -= Math.min(controls[AvailableControls.Left]!, 1) * fullMovement;
    }

    if (horizontalMovement && verticalMovement) {
        const diagonalMovement = Math.sqrt(
            Math.pow(horizontalMovement, 2) + Math.pow(verticalMovement, 2),
        );

        if (diagonalMovement > fullMovement) {
            verticalMovement = verticalMovement * (fullMovement / diagonalMovement);
            horizontalMovement = horizontalMovement * (fullMovement / diagonalMovement);
        }
    }

    return {
        x: currentPosition.x + horizontalMovement,
        y: currentPosition.y + verticalMovement,
    };
}

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
