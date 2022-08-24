import {GameLoopHandler} from './game-loop';
import {GamepadMapping} from './gamepad/gamepad';
import {GamepadLoopHandler} from './gamepad/gamepad-loop-handler';
import {KeyboardInputHandler} from './keyboard-input-handler';
import {LoopHandler} from './loop-handler';

export type AllDeviceInputs = Readonly<{
    gamepad: Readonly<GamepadMapping>;
    keyboard: Readonly<Set<String>>;
}>;

export class AllDeviceInputHandler extends LoopHandler<AllDeviceInputs, GamepadMapping> {
    private readonly keyboardInputHandler = new KeyboardInputHandler();
    private readonly gamepadLoopHandler;

    constructor(gameLoop: GameLoopHandler) {
        super();
        this.gamepadLoopHandler = new GamepadLoopHandler(gameLoop);
        this.addLoopTrigger(this.gamepadLoopHandler);
    }

    protected generateCallbackInput(
        timestamp: number,
        gamepadMapping: GamepadMapping,
    ): AllDeviceInputs {
        const keyboardKeys = this.keyboardInputHandler.currentlyPressedKeys;

        return {
            gamepad: gamepadMapping,
            keyboard: keyboardKeys,
        };
    }
}
