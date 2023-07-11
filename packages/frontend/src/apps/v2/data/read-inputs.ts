import {getEnumTypedKeys, isTruthy} from '@augment-vir/common';
import {DeviceInputValue} from 'input-device-handler';
import {AvailableControls, Binding, DeviceBindings} from './settings/input-binding-settings';

export type ReadInputsOutput = Partial<
    Record<
        AvailableControls,
        /**
         * This number corresponds to the input device input value. For buttons this will be 0 or 1,
         * for axes this will be some value between 1 and 0.
         */
        number
    >
>;

export function readInputs(
    currentInputs: DeviceInputValue[],
    bindings: DeviceBindings,
): ReadInputsOutput {
    const activeControls = currentInputs
        .map((currentInput): [AvailableControls, number][] | undefined => {
            const assignedControls = getEnumTypedKeys(bindings).filter((control) => {
                const binding = bindings[control];

                return (
                    binding.inputName === currentInput.inputName &&
                    matchesDirection(binding, currentInput)
                );
            });

            if (assignedControls.length) {
                return assignedControls.map((assignedControl) => [
                    assignedControl,
                    Math.abs(currentInput.inputValue),
                ]);
            }
            return undefined;
        })
        .filter(isTruthy)
        .flat();

    const mappedValues = activeControls.reduce((accum, value) => {
        accum[value[0]] = value[1];
        return accum;
    }, {} as ReadInputsOutput);

    return mappedValues;
}

function matchesDirection(binding: Binding, input: DeviceInputValue): boolean {
    if (binding.direction > 0) {
        return input.inputValue > 0;
    } else {
        return input.inputValue < 0;
    }
}
