import {ForwardGameSettings} from './game-settings';
import {latestSettingsVersionNumber} from './game-settings-updater';

export const defaultGameSettings: ForwardGameSettings = {
    gamepadSettings: {
        deadZones: {},
    },
    bindings: {},
    settingsVersion: latestSettingsVersionNumber,
};
