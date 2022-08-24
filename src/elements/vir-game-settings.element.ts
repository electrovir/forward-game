import {defineElement, html} from 'element-vir';
import {ForwardGameSettings} from '../data/settings/game-settings';

export const VirGameSettings = defineElement<{inputSettings: undefined | ForwardGameSettings}>()({
    tagName: 'vir-game-settings',
    renderCallback: ({state, updateState}) => {
        return html``;
    },
});
