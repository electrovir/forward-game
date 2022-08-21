import {getNavigator} from '../navigator';

export type GamepadMapping = Record<number, Gamepad>;

export function areGamepadsSupported(): boolean {
    const navigator = getNavigator();
    return 'webkitGamepads' in navigator || 'getGamepads' in navigator;
}

export function getCurrentGamepads(): GamepadMapping {
    if (!areGamepadsSupported()) {
        return {};
    }
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

export function areAnyGamepadInputsActive(gamepad: Gamepad) {
    return (
        gamepad.axes.some((axe) => !!axe) ||
        gamepad.buttons.some((button) => button.pressed || button.touched)
    );
}
