import {defineElement, html} from 'element-vir';
import {ForwardGameSettings} from '../data/settings/game-settings-type';

export const VirGameSettings = defineElement<{inputSettings: undefined | ForwardGameSettings}>()({
    tagName: 'vir-game-settings',
    renderCallback: () => {
        return html``;
    },
});
