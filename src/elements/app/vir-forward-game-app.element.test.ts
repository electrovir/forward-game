import {assert} from '@open-wc/testing';
import {defaultForwardGameAppRoute} from '../../router/app-router';
import {fixtureIt} from '../../testing/fixture-test';
import {renderEmptyElement} from '../../testing/render-empty-element.test-helper';
import {VirForwardGameApp} from './vir-forward-game-app.element';

describe(VirForwardGameApp.tagName, () => {
    fixtureIt('should create an element', async () => {
        await renderEmptyElement(VirForwardGameApp);
    });

    fixtureIt('should start on the home page', async () => {
        const app = await renderEmptyElement(VirForwardGameApp);

        assert.deepStrictEqual(app.instanceState.currentRoute, defaultForwardGameAppRoute);
    });
});
