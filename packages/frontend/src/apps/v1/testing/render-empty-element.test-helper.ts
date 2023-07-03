import {fixture as renderFixture} from '@open-wc/testing';
import {DeclarativeElementDefinition, html} from 'element-vir';
import {typedAssertInstanceOf} from './typed-assert.test-helper';

export async function renderEmptyElement<ElementDefinition extends DeclarativeElementDefinition>(
    inputElement: ElementDefinition,
): Promise<ElementDefinition['instanceType']> {
    const rendered = await renderFixture(
        html`
            <${inputElement}></${inputElement}>
        `,
    );

    typedAssertInstanceOf(rendered, inputElement);
    return rendered;
}
