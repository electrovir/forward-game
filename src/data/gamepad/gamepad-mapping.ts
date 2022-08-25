import {GamepadWithInputs, maskGamepadInputs} from './gamepad-input';

export type GamepadMapping = Record<number, GamepadWithInputs>;

export type GamepadIdMapping = Record<string, GamepadWithInputs>;

export function createGamepadIdMapping(gamepadMapping: GamepadMapping): GamepadIdMapping {
    const idInputMapping: GamepadIdMapping = {};

    Object.values(gamepadMapping).forEach((gamepadWithInputs) => {
        const id = gamepadWithInputs.gamepad.id;
        const currentInputsForId = idInputMapping[id];

        if (currentInputsForId) {
            currentInputsForId.inputs = maskGamepadInputs(
                currentInputsForId.inputs,
                gamepadWithInputs.inputs,
            );
        } else {
            idInputMapping[id] = gamepadWithInputs;
        }
    });

    return idInputMapping;
}
