import {GamepadWithInputs} from '../gamepad/gamepad-input';

export const keyboardDevice = {
    index: -1,
    id: 'keyboard',
} as const;

export type InputDevice = typeof keyboardDevice | GamepadWithInputs;

export function isGamepad(inputDevice: InputDevice): inputDevice is GamepadWithInputs {
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
