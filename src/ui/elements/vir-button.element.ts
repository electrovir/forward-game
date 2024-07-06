import {PartialAndUndefined} from '@augment-vir/common';
import {Coords, nav, navSelector} from 'device-navigation';
import {css, defineElement, html} from 'element-vir';
import {createFocusStyles, noNativeFormStyles} from 'vira';

export const VirButton = defineElement<
    PartialAndUndefined<{selected: boolean; nav: Coords | undefined}>
>()({
    tagName: 'vir-button',
    hostClasses: {
        'vir-button-selected': ({inputs}) => !!inputs.selected,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
        }

        button {
            ${noNativeFormStyles};
            outline: none;
            padding: 8px;
            font: inherit;
            width: 100%;
            position: relative;
            border-radius: 8px;
            border: 2px solid #ccc;
            background-color: white;
        }

        ${navSelector.css.click('button')} {
            background-color: #ccc;
            border-color: dodgerblue;
        }

        ${createFocusStyles({
            selector: 'button:focus',
            elementBorderSize: 2,
        })}

        button:focus {
            background-color: #eee;
        }

        ${hostClasses['vir-button-selected'].selector} button {
            background-color: skyblue;
        }
    `,
    renderCallback({inputs}) {
        return html`
            <button autofocus ${inputs.nav ? nav(inputs.nav.x, inputs.nav.y) : nav()}>
                <slot></slot>
            </button>
        `;
    },
    options: {
        ignoreUnsetInputs: true,
    },
});
