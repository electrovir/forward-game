import {autoFocusFirst, MenuNavController} from '@game-vir/handle-input';
import {css, defineElement, html, listen} from 'element-vir';
import {ForwardGamePipeline} from '../../services/game-pipeline/forward-game-pipeline';
import {OptionsState} from '../../services/game-pipeline/state/options-state';
import {maxPlayers} from '../../services/game-pipeline/state/player-state';
import {defaultForwardGameRoute} from '../../services/router/routes';
import {saveState} from '../../services/storage/storage';
import {ChangeGameRouteEvent} from '../events/change-game-route.event';
import {VirButton} from './vir-button.element';

export const VirOptions = defineElement<{gamePipeline: ForwardGamePipeline}>()({
    tagName: 'vir-options',
    styles: css`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .submission-buttons {
            display: flex;
        }

        .option-title {
            padding: 8px 16px 8px 0;
        }

        .options-wrapper {
            background-color: white;
            border: 3px solid #ccc;
            border-radius: 32px;
            padding: 32px;

            display: flex;
            flex-direction: column;
            gap: 64px;
        }

        ${VirButton} {
            min-width: 40px;
            margin: 2px;
        }
    `,
    stateInitStatic: {
        menuNavController: undefined as undefined | MenuNavController,
        currentOptions: {} as OptionsState,
        cleanup: undefined as undefined | (() => void),
    },
    initCallback({inputs, state, updateState, host}) {
        if (!state.cleanup) {
            const menuNavController = new MenuNavController(host, inputs.gamePipeline, {
                allowWrapping: true,
            });

            const unlisten = inputs.gamePipeline.listenToState(true, {options: true}, (options) => {
                updateState({currentOptions: {...options}});
            });

            updateState({
                menuNavController,
                cleanup: () => {
                    unlisten();
                    menuNavController.destroy();
                },
            });
        }
    },
    cleanupCallback({state, updateState}) {
        state.cleanup?.();

        updateState({
            cleanup: undefined,
            menuNavController: undefined,
        });
    },
    renderCallback({inputs, state, dispatch}) {
        const playerButtonTemplates = Array(maxPlayers)
            .fill(0)
            .map((value, index) => {
                const playerPosition = index + 1;
                return html`
                    <td>
                        <${VirButton.assign({
                            selected: state.currentOptions.playerCount === playerPosition,
                            nav: {x: playerPosition - 1, y: 0},
                        })}
                            ${listen('click', () => {
                                inputs.gamePipeline.currentState.options.playerCount =
                                    playerPosition;
                            })}
                        >
                            ${playerPosition}
                        </${VirButton}>
                    </td>
                `;
            });

        return html`
            <div class="options-wrapper">
                <table ${autoFocusFirst('button')}>
                    <tr>
                        <th><span class="option-title">Players</span></th>
                        ${playerButtonTemplates}
                    </tr>
                </table>
                <div class="submission-buttons">
                    <${VirButton.assign({nav: {x: 0, y: 1}})}
                        ${listen('click', async () => {
                            await saveState({
                                playerCount: state.currentOptions.playerCount,
                            });
                            dispatch(new ChangeGameRouteEvent(defaultForwardGameRoute));
                        })}
                    >
                        Back
                    </${VirButton}>
                </div>
            </div>
        `;
    },
});
