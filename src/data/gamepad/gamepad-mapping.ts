import {areJsonEqual} from 'augment-vir';
import {maskGamepadInputs} from './gamepad-input';
import {SerializedGamepad} from './serialized-gamepad';

export type GamepadMapping = Record<number, SerializedGamepad>;

export type GamepadIdMapping = Record<string, SerializedGamepad>;

export function createGamepadIdMapping(gamepadMapping: GamepadIdMapping): GamepadIdMapping {
    const idInputMapping: GamepadIdMapping = {};

    Object.values(gamepadMapping).forEach((gamepadWithInputs) => {
        const id = gamepadWithInputs.id;
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
    const previousIndexes = Object.keys(previous);
    const currentIndexes = Object.keys(current);
    return !areJsonEqual(previousIndexes, currentIndexes);
}
