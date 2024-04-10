import {defineElementNoInputs} from 'element-vir';

export const VirGameApp = defineElementNoInputs({
    tagName: 'vir-game-app',
    renderCallback() {
        return 'hello there';
    },
});
