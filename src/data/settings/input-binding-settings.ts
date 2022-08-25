import {SerializedGamepadWithInputs} from '../gamepad/serialized-gamepad';

export const keyboardDevice = {
    index: -1,
    id: 'keyboard',
} as const;

export type InputDevice = typeof keyboardDevice | SerializedGamepadWithInputs;

export function isGamepad(inputDevice: InputDevice): inputDevice is SerializedGamepadWithInputs {
    return inputDevice !== keyboardDevice;
}

export type InputBinding =
    | {
          key: string;
      }
    | {
          controllerInput:
              | {
                    axeIndex: number;
                    axeDirection: 1 | -1;
                }
              | {
                    buttonIndex: number;
                };
      };

export enum AvailableControls {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
}

export type InputBindingSettings = {
    device: string | typeof keyboardDevice;
    bindings: Record<AvailableControls, InputBinding>;
};
