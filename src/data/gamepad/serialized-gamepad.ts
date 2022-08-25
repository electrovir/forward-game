import {areJsonEqual, mapObject} from 'augment-vir';
import {GamepadWithInputs} from './gamepad-input';
import {GamepadMapping} from './gamepad-mapping';

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

export type SerializedGamepadWithInputs = Readonly<{
    id: string;
    index: number;
    gamepad: SerializedGamepad;
    inputs: {
        axes: readonly number[];
        buttons: readonly SerializedGamepadButton[];
    };
}>;

export type SerializedGamepadMapping = Readonly<Record<number, SerializedGamepadWithInputs>>;

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

export function serializeGamepadWithInputs(
    gamepadWithInputs: GamepadWithInputs,
): SerializedGamepadWithInputs {
    const serializedGamepad = serializeGamepad(gamepadWithInputs.gamepad);
    return {
        id: gamepadWithInputs.id,
        index: gamepadWithInputs.index,
        gamepad: serializedGamepad,
        inputs: {
            axes: serializedGamepad.axes,
            buttons: serializedGamepad.buttons,
        },
    };
}

export function serializeGamepadMapping(mapping: GamepadMapping): SerializedGamepadMapping {
    return mapObject(mapping, (key, value) => serializeGamepadWithInputs(value));
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
