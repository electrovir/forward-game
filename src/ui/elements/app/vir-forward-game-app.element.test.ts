import {fixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {VirForwardGameApp} from './vir-forward-game-app.element';

describe(VirForwardGameApp.tagName, () => {
    it('renders', async () => {
        const element = await fixture(html`
            <${VirForwardGameApp}></${VirForwardGameApp}>
        `);

        assertInstanceOf(element, VirForwardGameApp);
    });
});
