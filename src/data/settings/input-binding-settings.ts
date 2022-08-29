import {getObjectTypedValues} from 'augment-vir';

export enum AvailableControls {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
    Pause = 'pause',
}

export type DeviceBindings = Required<Record<AvailableControls, Binding>>;

export type Binding = {
    inputName: string;
    direction: 1 | -1;
};

export const blankBindings: DeviceBindings = {
    [AvailableControls.Up]: {
        direction: 1,
        inputName: '',
    },
    [AvailableControls.Down]: {
        direction: 1,
        inputName: '',
    },
    [AvailableControls.Left]: {
        direction: 1,
        inputName: '',
    },
    [AvailableControls.Right]: {
        direction: 1,
        inputName: '',
    },
    [AvailableControls.Pause]: {
        direction: 1,
        inputName: '',
    },
};

export function hasAllBindings(bindings: DeviceBindings | undefined): boolean {
    if (bindings) {
        return getObjectTypedValues(bindings).every((value) => value.inputName !== '');
    } else {
        return false;
    }
}

export type InputBindingSettings = {
    deviceName: string;
    bindings: DeviceBindings;
};
