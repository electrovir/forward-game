import {joinWithFinalConjunction} from '@augment-vir/common';
import {autoFocusFirst} from '@game-vir/handle-input';
import {css, defineElement, html, listen, nothing} from 'element-vir';
import {defaultForwardGameRoute} from '../../services/router/routes';
import {ChangeGameRouteEvent} from '../events/change-game-route.event';
import {VirButton} from './vir-button.element';

export const VirVictory = defineElement<{winningPlayers: string[]}>()({
    tagName: 'vir-victory',
    styles: css`
        :host {
            display: block;
            position: relative;
        }
    `,
    renderCallback({inputs, dispatch}) {
        if (!inputs.winningPlayers.length) {
            return nothing;
        }

        const hasManyWinners = inputs.winningPlayers.length > 1;

        const victoryString = [
            'Player',
            hasManyWinners ? 's' : '',
            ' ',
            joinWithFinalConjunction(inputs.winningPlayers, 'and'),
            ' ',
            hasManyWinners ? 'have' : 'has',
            ' ',
            'won!',
        ].join('');

        return html`
            <div class="end-game overlay">
                <div>
                    <h1>Victory</h1>
                    <h2>${victoryString}</h2>
                    <p>
                        <${VirButton}
                            ${autoFocusFirst('button')}
                            ${listen('click', () => {
                                dispatch(new ChangeGameRouteEvent(defaultForwardGameRoute));
                            })}
                        >
                            Return to Menu
                        </${VirButton}>
                    </p>
                </div>
            </div>
        `;
    },
});
