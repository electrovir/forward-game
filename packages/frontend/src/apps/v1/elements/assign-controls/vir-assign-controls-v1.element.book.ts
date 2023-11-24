import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {elementsPage} from '../../../element-book/ui/elements/top-level-book-element-entries';
import {VirAssignControlsV1} from './vir-assign-controls-v1.element';

export const assignControlsV1Page = defineBookPage({
    parent: elementsPage,
    title: VirAssignControlsV1.tagName,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'basic',
            styles: css`
                :host {
                    width: 1000px;
                }
            `,
            renderCallback({controls}) {
                return html`
                    <${VirAssignControlsV1.assign({
                        requiredActionNames: [
                            'cut tree',
                            'eat food',
                            'move',
                            'sleep',
                            'walk',
                        ],
                        gamePipeline: controls.gamePipeline,
                    })}></${VirAssignControlsV1}>
                `;
            },
        });
    },
});
