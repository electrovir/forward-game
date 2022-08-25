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

export type SerializedGamepadInputs = Readonly<{
    axes: readonly number[];
    buttons: readonly SerializedGamepadButton[];
}>;

export type SerializedGamepadWithInputs = Readonly<{
    id: string;
    index: number;
    gamepad: SerializedGamepad;
    inputs: SerializedGamepadInputs;
}>;

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
