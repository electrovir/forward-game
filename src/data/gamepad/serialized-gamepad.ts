import {areJsonEqual, mapObject} from 'augment-vir';
import {GamepadMapping} from './gamepad';

export type SerializedGamepadButton = Readonly<{
    pressed: boolean;
    value: number;
    touched: boolean;
}>;

export type SerializedGamepad = Readonly<{
    axes: readonly number[];
    buttons: readonly SerializedGamepadButton[];
    connected: boolean;
    id: string;
    index: number;
    mapping: string;
    timestamp: number;
    serialized: true;
}>;

export type SerializedGamepadMapping = Readonly<Record<number, SerializedGamepad>>;

export function serializeGamepadButton(gamepadButton: GamepadButton): SerializedGamepadButton {
    return {
        pressed: gamepadButton.pressed,
        value: gamepadButton.value,
        touched: gamepadButton.touched,
    };
}

export function serializeGamepad(gamepad: Gamepad): SerializedGamepad {
    // basically include everything but the haptic stuff since those include functions
    return {
        axes: gamepad.axes,
        buttons: gamepad.buttons.map(serializeGamepadButton),
        connected: gamepad.connected,
        id: gamepad.id,
        index: gamepad.index,
        mapping: gamepad.mapping,
        timestamp: gamepad.timestamp,
        serialized: true,
    };
}

export function serializeGamepadMapping(mapping: GamepadMapping): SerializedGamepadMapping {
    return mapObject(mapping, (key, value) => serializeGamepad(value));
}

export function areGamepadMappingsEqual(
    a: SerializedGamepadMapping,
    b: SerializedGamepadMapping,
): boolean {
    return areJsonEqual(a, b);
}

export function newGamepadsWereConnected(
    previous: SerializedGamepadMapping,
    current: SerializedGamepadMapping,
): boolean {
    const previousIndexes = Object.keys(previous).sort();
    const currentIndexes = Object.keys(current).sort();
    return !areJsonEqual(previousIndexes, currentIndexes);
}
