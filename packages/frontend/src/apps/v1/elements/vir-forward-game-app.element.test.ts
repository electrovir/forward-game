import {fixture as renderFixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {gameVersionNames} from '../../../data/versions';
import {defaultGameRoute} from '../../../router/game-router';
import {fixtureIt} from '../testing/fixture-test';
import {typedAssertInstanceOf} from '../testing/typed-assert.test-helper';
import {VirForwardGameAppV1} from './vir-forward-game-app.element';

describe(VirForwardGameAppV1.tagName, () => {
    fixtureIt('renders', async () => {
        const fixture = await renderFixture(
            html`
                <${VirForwardGameAppV1}
                    ${assign(VirForwardGameAppV1, {
                        currentRoute: {
                            ...defaultGameRoute,
                            paths: [gameVersionNames.v1],
                        },
                    })}
                ></${VirForwardGameAppV1}>
            `,
        );

        typedAssertInstanceOf(fixture, VirForwardGameAppV1);
    });
});
