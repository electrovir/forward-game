export const keyboardDevice = 'keyboard';

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
