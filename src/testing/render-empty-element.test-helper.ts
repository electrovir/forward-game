import {fixture as renderFixture} from '@open-wc/testing';
import {FunctionalElement, html} from 'element-vir';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {typedAssertInstanceOf} from './typed-assert.test-helper';

export async function renderEmptyElement(inputElement: FunctionalElement): Promise<HTMLElement> {
    const tags = `<${inputElement.tagName}></${inputElement.tagName}>`;
    const rendered = await renderFixture(
        html`
            ${unsafeHTML(tags)}
        `,
    );

    typedAssertInstanceOf(rendered, HTMLElement);
    return rendered;
}
