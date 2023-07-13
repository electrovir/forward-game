import {defineElement, html} from 'element-vir';
import {ForwardGameSettings} from '../data/settings/game-settings-type';

export const VirGameSettingsV1 = defineElement<{inputSettings: undefined | ForwardGameSettings}>()({
    tagName: 'vir-game-settings-v1',
    renderCallback: () => {
        return html``;
    },
});
