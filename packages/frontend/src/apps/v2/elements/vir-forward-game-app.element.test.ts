import {fixture as renderFixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {gameVersionNames} from '../../../data/versions';
import {defaultGameRoute} from '../../../router/game-router';
import {fixtureIt} from '../testing/fixture-test';
import {typedAssertInstanceOf} from '../testing/typed-assert.test-helper';
import {VirForwardGameAppV2} from './vir-forward-game-app.element';

describe(VirForwardGameAppV2.tagName, () => {
    fixtureIt('renders', async () => {
        const fixture = await renderFixture(
            html`
                <${VirForwardGameAppV2}
                    ${assign(VirForwardGameAppV2, {
                        currentRoute: {
                            ...defaultGameRoute,
                            paths: [gameVersionNames.v2],
                        },
                    })}
                ></${VirForwardGameAppV2}>
            `,
        );

        typedAssertInstanceOf(fixture, VirForwardGameAppV2);
    });
});
