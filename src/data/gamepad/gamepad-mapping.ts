import {areJsonEqual} from 'augment-vir';
import {maskGamepadInputs} from './gamepad-input';
import {SerializedGamepadWithInputs} from './serialized-gamepad';

export type GamepadMapping = Record<number, SerializedGamepadWithInputs>;

export type GamepadIdMapping = Record<string, SerializedGamepadWithInputs>;

export function createGamepadIdMapping(gamepadMapping: GamepadIdMapping): GamepadIdMapping {
    const idInputMapping: GamepadIdMapping = {};

    Object.values(gamepadMapping).forEach((gamepadWithInputs) => {
        const id = gamepadWithInputs.gamepad.id;
        const currentInputsForId = idInputMapping[id];

        if (currentInputsForId) {
            idInputMapping[id] = {
                ...currentInputsForId,
                inputs: maskGamepadInputs(currentInputsForId.inputs, gamepadWithInputs.inputs),
            };
        } else {
            idInputMapping[id] = gamepadWithInputs;
        }
    });

    return idInputMapping;
}

export function areGamepadMappingsEqual(a: GamepadMapping, b: GamepadMapping): boolean {
    return areJsonEqual(a, b);
}

export function newGamepadsWereConnected(
    previous: GamepadMapping,
    current: GamepadMapping,
): boolean {
    const previousIndexes = Object.keys(previous).sort();
    const currentIndexes = Object.keys(current).sort();
    return !areJsonEqual(previousIndexes, currentIndexes);
}
