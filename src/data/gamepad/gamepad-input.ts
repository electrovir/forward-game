import {GamepadSettings} from '../settings/gamepad-settings';
import {
    SerializedGamepad,
    SerializedGamepadInputs,
    SerializedGamepadWithInputs,
} from './serialized-gamepad';

const defaultDeadZone = 0.09;

export function maskGamepadInputs(
    a: SerializedGamepadInputs,
    b: SerializedGamepadInputs,
): SerializedGamepadInputs {
    const finalInputs: SerializedGamepadInputs = {
        axes: a.axes.map((aAxe, axeIndex) => {
            return b.axes[axeIndex] || aAxe;
        }),
        buttons: a.buttons.map((aButton, axeIndex) => {
            return b.buttons[axeIndex] || aButton;
        }),
    };

    return finalInputs;
}

export function readGamepadInput(
    gamepad: SerializedGamepad,
    settings: GamepadSettings,
): SerializedGamepadInputs {
    const currentGamepadSettings = settings.deadZones[gamepad.id];

    const axes: SerializedGamepadInputs['axes'] = gamepad.axes.map((axeInput, axeIndex) => {
        const deadZone: number = currentGamepadSettings?.axesDeadZones[axeIndex] ?? defaultDeadZone;
        return Math.abs(axeInput) < deadZone ? 0 : axeInput;
    });
    const buttons: SerializedGamepadInputs['buttons'] = gamepad.buttons.map(
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

export function areAnyGamepadInputsActive(gamepadInput: SerializedGamepadInputs): boolean {
    return (
        gamepadInput.axes.some((axe) => !!axe) ||
        gamepadInput.buttons.some((button) => button.value)
    );
}

export type InputLocation = {
    gamepadIndex: number;
    deviceName: string;
    axeOrButton: keyof SerializedGamepadInputs;
    inputIndex: number;
};

function findPressedInput(
    gamepadInput: SerializedGamepadInputs,
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

export function getAnyInput(gamepad: SerializedGamepadWithInputs): InputLocation | undefined {
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
