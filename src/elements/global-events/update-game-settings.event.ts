import {defineTypedEvent} from 'element-vir';
import {ForwardGameSettings} from '../../data/settings/game-settings';

export const UpdateGameSettings = defineTypedEvent<ForwardGameSettings>()('update-game-settings');
