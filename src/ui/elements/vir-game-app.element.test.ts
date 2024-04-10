import {fixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {VirGameApp} from './vir-game-app.element';

describe(VirGameApp.tagName, () => {
    it('renders', async () => {
        const instance = await fixture(html`
            <${VirGameApp}></${VirGameApp}>
        `);

        assertInstanceOf(instance, VirGameApp);
    });
});
