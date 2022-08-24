import {Writeable} from 'augment-vir';
import {GamepadSettings} from '../settings/gamepad-settings';

export type GamepadInput = {
    axes: readonly number[];
    buttons: readonly GamepadButton[];
};

const defaultDeadZone = 0.09;

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

export function areAnyGamepadInputsActive(gamepad: Gamepad, settings: GamepadSettings) {
    const readInputs = readGamepadInput(gamepad, settings);

    return (
        readInputs.axes.some((axe) => !!axe) || readInputs.buttons.some((button) => button.value)
    );
}
