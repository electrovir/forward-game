import {autoFocusFirst, MenuNavController} from '@game-vir/handle-input';
import {css, defineElement, html, listen} from 'element-vir';
import {
    ForwardGamePipeline,
    resetGameState,
} from '../../services/game-pipeline/forward-game-pipeline';
import {ForwardGamePage} from '../../services/router/routes';
import {ChangeGameRouteEvent} from '../events/change-game-route.event';
import {VirButton} from './vir-button.element';

const mainMenuButtons: ReadonlyArray<
    Readonly<{
        text: string;
        action: (params: {
            dispatch: (event: Event) => void;
            gamePipeline: ForwardGamePipeline;
        }) => void;
    }>
> = [
    {
        text: 'Play',
        action({dispatch, gamePipeline}) {
            resetGameState(gamePipeline);
            dispatch(
                new ChangeGameRouteEvent({
                    paths: [ForwardGamePage.Play],
                }),
            );
        },
    },
    {
        text: 'Options',
        action({dispatch}) {
            dispatch(
                new ChangeGameRouteEvent({
                    paths: [ForwardGamePage.Options],
                }),
            );
        },
    },
];

export const VirMainMenu = defineElement<{gamePipeline: ForwardGamePipeline}>()({
    tagName: 'vir-main-menu',
    styles: css`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .buttons {
            display: flex;
            flex-direction: column;
            gap: 32px;
            width: 200px;
            justify-items: stretch;
        }
    `,
    stateInitStatic: {
        menuNavController: undefined as undefined | MenuNavController,
        cleanup: undefined as undefined | (() => void),
    },
    initCallback({inputs, state, updateState, host}) {
        if (!state.menuNavController) {
            const menuNavController = new MenuNavController(host, inputs.gamePipeline, {
                allowWrapping: true,
            });
            updateState({
                menuNavController,
            });

            updateState({cleanup: () => menuNavController.destroy()});
        }
    },
    cleanupCallback({state, updateState}) {
        state.cleanup?.();

        updateState({
            cleanup: undefined,
            menuNavController: undefined,
        });
    },
    renderCallback({inputs, dispatch}) {
        const buttonTemplates = mainMenuButtons.map(
            (button) => html`
                <${VirButton}
                    ${listen('click', () => {
                        button.action({dispatch, gamePipeline: inputs.gamePipeline});
                    })}
                >
                    ${button.text}
                </${VirButton}>
            `,
        );

        return html`
            <section class="buttons" ${autoFocusFirst('button')}>${buttonTemplates}</section>
        `;
    },
});
