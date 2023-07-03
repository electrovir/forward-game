import {GamepadSettings} from './gamepad-settings';
import {InputBindingSettings} from './input-binding-settings';

export type DeviceBindingMap = Readonly<Record<string, InputBindingSettings>>;

export type ForwardGameSettings = Readonly<{
    gamepadSettings: Readonly<GamepadSettings>;
    bindings: DeviceBindingMap;
    settingsVersion: number;
}>;
