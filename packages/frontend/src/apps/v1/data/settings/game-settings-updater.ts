import {
    isObject,
    typedHasProperties,
    typedHasProperty,
    wrapNarrowTypeWithTypeCheck,
} from '@augment-vir/common';
import {ForwardGameSettings} from './game-settings-type';

export const latestSettingsVersionNumber = 0;

export function updateGameSettings(input: unknown): ForwardGameSettings | undefined {
    if (!isObject(input)) {
        return undefined;
    }
    if (!typedHasProperty(input, 'settingsVersion')) {
        return undefined;
    }
    if (
        typeof input.settingsVersion !== 'number' ||
        input.settingsVersion > latestSettingsVersionNumber
    ) {
        console.error(
            `Invalid version number from settings: ${input.settingsVersion}. Latest possible version is ${latestSettingsVersionNumber}`,
        );
        return undefined;
    }
    let currentVersion = input.settingsVersion;
    while (currentVersion < latestSettingsVersionNumber) {
        const updater = gameSettingsUpdaters[currentVersion];
        if (!updater) {
            console.error(`Failed to get settings updater for version ${currentVersion}`);
            return undefined;
        }
        input = updater(input);
        if (!input) {
            return undefined;
        }
        currentVersion++;
    }

    if (verifyCurrentVersion(input)) {
        return input;
    } else {
        return undefined;
    }
}

function verifyCurrentVersion(input: unknown): input is ForwardGameSettings {
    if (
        isObject(input) &&
        typedHasProperties(input, [
            'gamepadSettings',
            'bindings',
            'settingsVersion',
        ])
    ) {
        return true;
    } else {
        return false;
    }
}

const gameSettingsUpdaters = wrapNarrowTypeWithTypeCheck<
    Record<number, (input: any) => ForwardGameSettings | undefined>
>()({} as Record<number, (input: any) => ForwardGameSettings>);
