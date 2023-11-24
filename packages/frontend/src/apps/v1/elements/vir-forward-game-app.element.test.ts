import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {defaultGameRoute, gameVersions} from '../../../router/routes';
import {fixtureIt} from '../testing/fixture-test';
import {VirForwardGameAppV1} from './vir-forward-game-app.element';

describe(VirForwardGameAppV1.tagName, () => {
    fixtureIt('renders', async () => {
        const fixture = await renderFixture(html`
            <${VirForwardGameAppV1.assign({
                currentRoute: {
                    ...defaultGameRoute,
                    paths: [gameVersions.v1],
                },
            })}></${VirForwardGameAppV1}>
        `);

        assertInstanceOf(fixture, VirForwardGameAppV1);
    });
});
