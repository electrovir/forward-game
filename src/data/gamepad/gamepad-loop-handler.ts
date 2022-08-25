import {GameLoopHandler} from '../game-loop';
import {LoopHandler} from '../loop-handler';
import {getNavigator} from '../navigator';
import {emptyGamepadSettings, GamepadSettings} from '../settings/gamepad-settings';
import {readGamepadInput} from './gamepad-input';
import {GamepadMapping} from './gamepad-mapping';

export class GamepadLoopHandler extends LoopHandler<GamepadMapping, void> {
    protected override shouldRunCallbacks = GamepadLoopHandler.determineIfGamepadsAreSupported();
    private gamepadSettings: GamepadSettings = emptyGamepadSettings;

    constructor(gameLoop: GameLoopHandler) {
        super();
        this.addLoopTrigger(gameLoop);
    }

    private static determineIfGamepadsAreSupported() {
        const navigator = getNavigator();
        return 'webkitGamepads' in navigator || 'getGamepads' in navigator;
    }

    public updateGamepadSettings(input: GamepadSettings): void {
        this.gamepadSettings = input;
    }

    protected generateCallbackInput(): GamepadMapping {
        try {
            const navigator = getNavigator();

            const gamepads = Array.from(
                'webkitGetGamepads' in navigator
                    ? navigator.webkitGetGamepads()
                    : navigator.getGamepads(),
            ).filter((gamepad): gamepad is Gamepad => !!gamepad);

            const gamepadMapping: GamepadMapping = gamepads.reduce((mapping, gamepad) => {
                const gamepadInput = readGamepadInput(gamepad, this.gamepadSettings);

                mapping[gamepad.index] = {
                    id: gamepad.id,
                    index: gamepad.index,
                    gamepad,
                    inputs: gamepadInput,
                };
                return mapping;
            }, {} as GamepadMapping);

            return gamepadMapping;
        } catch (error) {
            console.error(error);
            return {};
        }
    }
}
