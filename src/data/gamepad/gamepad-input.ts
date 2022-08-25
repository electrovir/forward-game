import {DeepWriteable, Writeable} from 'augment-vir';
import {GamepadSettings} from '../settings/gamepad-settings';

export type GamepadWithInputs = {
    id: string;
    index: number;
    inputs: GamepadInput;
    gamepad: Gamepad;
};

export type GamepadInput = Readonly<{
    axes: readonly number[];
    buttons: readonly GamepadButton[];
}>;

const defaultDeadZone = 0.09;

export function maskGamepadInputs(a: GamepadInput, b: GamepadInput): GamepadInput {
    const finalInputs: DeepWriteable<GamepadInput> = a as DeepWriteable<GamepadInput>;

    b.axes.forEach((axe, index) => {
        if (axe) {
            finalInputs.axes[index] = axe;
        }
    });

    b.buttons.forEach((button, index) => {
        if (button.value) {
            finalInputs.buttons[index] = button;
        }
    });

    return finalInputs;
}

export function readGamepadInput(gamepad: Gamepad, settings: GamepadSettings): GamepadInput {
    const currentGamepadSettings = settings.deadZones[gamepad.id];

    const axes: GamepadInput['axes'] = gamepad.axes.map((axeInput, axeIndex) => {
        const deadZone: number = currentGamepadSettings?.axesDeadZones[axeIndex] ?? defaultDeadZone;
        return Math.abs(axeInput) < deadZone ? 0 : axeInput;
    });
    const buttons: Writeable<GamepadInput['buttons']> = gamepad.buttons.map(
        (buttonInput, buttonIndex) => {
            const deadZone: number =
                currentGamepadSettings?.axesDeadZones[buttonIndex] ?? defaultDeadZone;
            const buttonValue: number =
                Math.abs(buttonInput.value) < deadZone ? 0 : buttonInput.value;

            return {
                ...buttonInput,
                value: buttonValue,
            };
        },
    );

    return {
        axes,
        buttons,
    };
}

export function areAnyGamepadInputsActive(gamepadInput: GamepadInput): boolean {
    return (
        gamepadInput.axes.some((axe) => !!axe) ||
        gamepadInput.buttons.some((button) => button.value)
    );
}

export type InputLocation = {
    gamepadIndex: number;
    deviceName: string;
    axeOrButton: keyof GamepadInput;
    inputIndex: number;
};

function findPressedInput(
    gamepadInput: GamepadInput,
): Pick<InputLocation, 'axeOrButton' | 'inputIndex'> | undefined {
    for (let i = 0; i < gamepadInput.buttons.length; i++) {
        const currentButton = gamepadInput.buttons[i];
        if (currentButton && currentButton.value) {
            return {
                axeOrButton: 'buttons',
                inputIndex: i,
            };
        }
    }
    for (let i = 0; i < gamepadInput.axes.length; i++) {
        const currentAxe = gamepadInput.axes[i];
        if (currentAxe) {
            return {
                axeOrButton: 'axes',
                inputIndex: i,
            };
        }
    }

    return undefined;
}

export function getAnyInput(gamepad: GamepadWithInputs): InputLocation | undefined {
    let pressedGamepadInput = findPressedInput(gamepad.inputs);

    if (pressedGamepadInput) {
        return {
            gamepadIndex: gamepad.gamepad.index,
            deviceName: gamepad.gamepad.id,
            ...pressedGamepadInput,
        };
    } else {
        return undefined;
    }
}
