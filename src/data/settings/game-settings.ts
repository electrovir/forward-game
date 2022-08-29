import {defaultGameSettings} from './default-game-settings';
import {updateGameSettings} from './game-settings-updater';
import {GamepadSettings} from './gamepad-settings';
import {InputBindingSettings} from './input-binding-settings';

export type DeviceBindingMap = Readonly<Record<string, InputBindingSettings>>;

export type ForwardGameSettings = Readonly<{
    gamepadSettings: Readonly<GamepadSettings>;
    bindings: DeviceBindingMap;
    settingsVersion: number;
}>;

const localStorageGameSettingsKey = 'forward-game-settings';

function loadSavedGameSettings(): ForwardGameSettings | undefined {
    const storedValue = window.localStorage.getItem(localStorageGameSettingsKey);

    if (!storedValue) {
        return undefined;
    }

    try {
        const parsedSettings = JSON.parse(storedValue);
        console.log({parsedSettings});
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
