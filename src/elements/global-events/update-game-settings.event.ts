import {defineTypedEvent} from 'element-vir';
import {ForwardGameSettings} from '../../data/settings/game-settings';

export const UpdateGameSettingsEvent =
    defineTypedEvent<ForwardGameSettings>()('update-game-settings');
