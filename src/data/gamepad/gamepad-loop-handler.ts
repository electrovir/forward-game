import {GameLoopHandler} from '../game-loop';
import {LoopHandler} from '../loop-handler';
import {getNavigator} from '../navigator';
import {GamepadMapping} from './gamepad';

export class GamepadLoopHandler extends LoopHandler<GamepadMapping, void> {
    protected override shouldRunCallbacks = GamepadLoopHandler.determineIfGamepadsAreSupported();

    constructor(gameLoop: GameLoopHandler) {
        super();
        this.addLoopTrigger(gameLoop);
    }

    private static determineIfGamepadsAreSupported() {
        const navigator = getNavigator();
        return 'webkitGamepads' in navigator || 'getGamepads' in navigator;
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
                mapping[gamepad.index] = gamepad;
                return mapping;
            }, {} as GamepadMapping);

            return gamepadMapping;
        } catch (error) {
            console.error(error);
            return {};
        }
    }
}
