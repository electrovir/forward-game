import {defineElementNoInputs} from 'element-vir';

export const VirLoading = defineElementNoInputs({
    tagName: 'vir-loading',
    renderCallback() {
        return 'Loading...';
    },
});
