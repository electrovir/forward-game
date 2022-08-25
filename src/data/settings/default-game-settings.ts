import {ForwardGameSettings} from './game-settings';
import {latestSettingsVersionNumber} from './game-settings-updater';
import {emptyGamepadSettings} from './gamepad-settings';

export const defaultGameSettings: ForwardGameSettings = {
    gamepadSettings: emptyGamepadSettings,
    bindings: {},
    settingsVersion: latestSettingsVersionNumber,
};
