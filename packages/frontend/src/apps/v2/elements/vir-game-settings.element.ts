import {defineElement, html} from 'element-vir';
import {ForwardGameSettings} from '../data/settings/game-settings-type';

export const VirGameSettingsV2 = defineElement<{inputSettings: undefined | ForwardGameSettings}>()({
    tagName: 'vir-game-settings-v2',
    renderCallback: () => {
        return html``;
    },
});
