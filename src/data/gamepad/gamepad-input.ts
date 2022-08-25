import {areJsonEqual} from 'augment-vir';
import {GamepadSettings} from '../settings/gamepad-settings';
import {GamepadInputs, SerializedGamepad} from './serialized-gamepad';

const defaultDeadZone = 0.09;

export function maskGamepadInputs(a: GamepadInputs, b: GamepadInputs): GamepadInputs {
    const finalInputs: GamepadInputs = {
        axes: a.axes.map((aAxe, axeIndex) => {
            return b.axes[axeIndex] || aAxe;
        }),
        buttons: a.buttons.map((aButton, axeIndex) => {
            return b.buttons[axeIndex] || aButton;
        }),
    };

    return finalInputs;
}

export function normalizeGamepadInput(
    gamepad: SerializedGamepad,
    settings: GamepadSettings,
): GamepadInputs {
    const currentGamepadSettings = settings.deadZones[gamepad.id];

    const axes: GamepadInputs['axes'] = gamepad.inputs.axes.map((axeInput, axeIndex) => {
        const deadZone: number = currentGamepadSettings?.axesDeadZones[axeIndex] ?? defaultDeadZone;
        return Math.abs(axeInput) < deadZone ? 0 : axeInput;
    });
    const buttons: GamepadInputs['buttons'] = gamepad.inputs.buttons.map(
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

export function countActiveGamepadInputs(gamepadInputs: GamepadInputs): number {
    return [
        ...gamepadInputs.axes.filter((axe) => !!axe),
        ...gamepadInputs.buttons.filter((button) => button.value),
    ].length;
}

export function wasAGamepadInputPressed(
    latestInputs: GamepadInputs,
    previousInputs?: GamepadInputs,
): boolean {
    if (previousInputs) {
        return (
            !areJsonEqual(latestInputs, previousInputs) &&
            countActiveGamepadInputs(latestInputs) > countActiveGamepadInputs(previousInputs)
        );
    } else {
        return !!countActiveGamepadInputs(latestInputs);
    }
}

export type InputLocation = {
    gamepadIndex: number;
    deviceName: string;
    axeOrButton: keyof GamepadInputs;
    inputIndex: number;
};

function findPressedInput(
    gamepadInput: GamepadInputs,
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

export function getAnyInput(gamepad: SerializedGamepad): InputLocation | undefined {
    let pressedGamepadInput = findPressedInput(gamepad.inputs);

    if (pressedGamepadInput) {
        return {
            gamepadIndex: gamepad.index,
            deviceName: gamepad.id,
            ...pressedGamepadInput,
        };
    } else {
        return undefined;
    }
}
