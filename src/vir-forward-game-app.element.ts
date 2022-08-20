import {defineFunctionalElement, html} from 'element-vir';

export const VirForwardGameApp = defineFunctionalElement({
    tagName: 'vir-forward-game-app',
    renderCallback: () => {
        return html`
            hello there
        `;
    },
});
