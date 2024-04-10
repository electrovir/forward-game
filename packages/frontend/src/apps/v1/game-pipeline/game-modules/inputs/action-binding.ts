import {InputDeviceTypeEnum, NonGamepadInputDeviceKey} from 'input-device-handler';

export enum BindingDirectionEnum {
    Positive = 'positive',
    Negative = 'negative',
}

export const AnyPlayer = 'any-player' as const;
export type AnyPlayer = typeof AnyPlayer;

export type PlayerIndex = number | AnyPlayer;

export type ActionBinding =
    | {
          deviceType: InputDeviceTypeEnum.Keyboard | InputDeviceTypeEnum.Mouse;
          deviceKey: NonGamepadInputDeviceKey;
          inputName: string;
          direction: BindingDirectionEnum;
          actionName: string;
      }
    | {
          deviceType: InputDeviceTypeEnum.Gamepad;
          gamepadModelName: string | undefined;
          /** `gamepadName` is only needed if the `gamepadModel` is `undefined`. */
          gamepadName: string;
          gamepadLayoutInputName: string | undefined;
          /** `inputName` is only needed if `gamepadLayoutInputName` is `undefined`. */
          inputName: string;
          direction: BindingDirectionEnum;
          actionName: string;
          /** The player that is creating the input. */
          inputPlayerIndex: PlayerIndex;
      };

export type ActionBindingGroup = {
    isDefault: boolean;
    name: string;
    bindings: ReadonlyArray<ActionBinding>;
};

export type NamedActionBindingGroups = Readonly<{
    [bindingSetName: string]: ActionBindingGroup;
}>;
