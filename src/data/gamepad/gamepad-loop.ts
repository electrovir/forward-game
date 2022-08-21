import {animationFrameOrCustomTickRate} from '../../augments/timeout';
import {areGamepadsSupported, GamepadMapping, getCurrentGamepads} from './gamepad';

export type GamepadsUpdateCallback = (gamepads: GamepadMapping) => void;

function readGamepadsLoop(
    customTickRateMs: number | undefined,
    updateCallback: GamepadsUpdateCallback,
) {
    const currentGamepads = getCurrentGamepads();
    updateCallback(currentGamepads);
    animationFrameOrCustomTickRate(customTickRateMs, () => {
        readGamepadsLoop(customTickRateMs, updateCallback);
    });
}

export function startGamepadReadingLoopIfSupported(
    customTickRateMs: number | undefined,
    updateCallback: GamepadsUpdateCallback,
): boolean {
    if (areGamepadsSupported()) {
        animationFrameOrCustomTickRate(customTickRateMs, () => {
            readGamepadsLoop(customTickRateMs, updateCallback);
        });
        return true;
    } else {
        console.info('Gamepads are not supported.');
        return false;
    }
}
