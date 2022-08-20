import {defineElementNoInputs, html} from 'element-vir';

export const VirForwardGameApp = defineElementNoInputs({
    tagName: 'vir-forward-game-app',
    stateInit: {
        stuff: 'hello',
    },
    renderCallback: () => {
        return html`
            hello there
        `;
    },
});
