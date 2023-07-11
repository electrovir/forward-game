import {GamepadDeadZoneSettings} from 'input-device-handler';

export type GamepadSettings = Readonly<{
    deadZones: GamepadDeadZoneSettings;
}>;

export const emptyGamepadSettings: GamepadSettings = {deadZones: {}};
