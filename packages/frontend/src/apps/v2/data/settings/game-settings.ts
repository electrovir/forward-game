import {ForwardGameSettings} from './game-settings-type';
import {latestSettingsVersionNumber, updateGameSettings} from './game-settings-updater';
import {emptyGamepadSettings} from './gamepad-settings';

const defaultGameSettings: ForwardGameSettings = {
    gamepadSettings: emptyGamepadSettings,
    bindings: {},
    settingsVersion: latestSettingsVersionNumber,
};

const localStorageGameSettingsKey = 'forward-game-settings';

function loadSavedGameSettings(): ForwardGameSettings | undefined {
    const storedValue = window.localStorage.getItem(localStorageGameSettingsKey);

    if (!storedValue) {
        return undefined;
    }

    try {
        const parsedSettings = JSON.parse(storedValue);
        return updateGameSettings(parsedSettings);
    } catch (jsonParseError) {
        console.error(`Failed to load game settings: ${jsonParseError}`);
        return undefined;
    }
}

export function getGameSettings(): ForwardGameSettings {
    const savedSettings = loadSavedGameSettings();

    if (savedSettings) {
        return savedSettings;
    } else {
        saveGameSettings(defaultGameSettings);
        return defaultGameSettings;
    }
}

export function saveGameSettings(settings: ForwardGameSettings): boolean {
    try {
        window.localStorage.setItem(localStorageGameSettingsKey, JSON.stringify(settings));
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
