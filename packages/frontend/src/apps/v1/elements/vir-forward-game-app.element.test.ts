import {fixture as renderFixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {gameVersionNames} from '../../../data/versions';
import {defaultGameRoute} from '../../../router/game-router';
import {fixtureIt} from '../testing/fixture-test';
import {typedAssertInstanceOf} from '../testing/typed-assert.test-helper';
import {VirForwardGameApp} from './vir-forward-game-app.element';

describe(VirForwardGameApp.tagName, () => {
    fixtureIt('renders', async () => {
        const fixture = await renderFixture(
            html`
                <${VirForwardGameApp}
                    ${assign(VirForwardGameApp, {
                        currentRoute: {
                            ...defaultGameRoute,
                            paths: [gameVersionNames.v1],
                        },
                    })}
                ></${VirForwardGameApp}>
            `,
        );

        typedAssertInstanceOf(fixture, VirForwardGameApp);
    });
});
