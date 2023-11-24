import {css, defineElement, html, listen} from 'element-vir';
import {ViraLink, noNativeFormStyles, noNativeSpacing, viraAnimationDurations} from 'vira';
import {ChangeRouteEvent, GameRouter} from '../../../router/game-router';
import {GameFullRoute} from '../../../router/routes';
import {AllGameVersionData} from '../data/game-version-data';

export const VirSelectGameVersion = defineElement<{
    versionData: AllGameVersionData;
    router: Pick<GameRouter, 'createRoutesUrl'>;
}>()({
    tagName: 'vir-select-game-version',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            padding: 32px;
            gap: 16px;
        }

        .game-version {
            display: flex;
            align-items: center;

            gap: 8px;
            border-radius: 16px;
            border: 2px solid #ccc;
            padding: 16px;
            transition: ${viraAnimationDurations['vira-interaction-animation-duration'].value};
        }

        .game-version:hover {
            background-color: #b2ecff;
            border-color: #33ccff;
        }
        .game-version:active {
            background-color: #6adaff;
            border-color: #33ccff;
        }

        button {
            ${noNativeFormStyles}
        }

        h2,
        p {
            ${noNativeSpacing}
        }

        ${ViraLink} {
            text-decoration: none;
        }
    `,
    renderCallback({inputs, dispatch}) {
        return Object.entries(inputs.versionData).map(
            ([
                versionName,
                versionData,
            ]) => {
                return html`
                    <${ViraLink.assign({
                        route: {
                            route: {
                                paths: [versionName],
                            },
                            router: inputs.router,
                        },
                    })}
                        ${listen(ViraLink.events.routeChange, (event) => {
                            dispatch(
                                new ChangeRouteEvent({
                                    route: event.detail as GameFullRoute,
                                    sanitized: false,
                                }),
                            );
                        })}
                    >
                        <section class="game-version">
                            <h2>${versionName}</h2>
                            <p>${versionData.description}</p>
                        </section>
                    </${ViraLink}>
                `;
            },
        );
    },
});
