import {getObjectTypedKeys} from 'augment-vir';
import {css, defineElement, html} from 'element-vir';
import {TemplateResult} from 'lit';

export type ConnectionIndicatorInputs = {
    gamepadsWithButtonsPushed: Record<number, boolean>;
};

export const VirGamepadConnectionIndicator = defineElement<ConnectionIndicatorInputs>()({
    tagName: 'vir-gamepad-connection-indicator',
    styles: css`
        :host {
            display: flex;
        }

        .gamepad-icon {
            font-size: 2em;
        }

        .glowing {
            animation: glow 200ms infinite alternate;
        }

        @keyframes glow {
            0% {
                filter: drop-shadow(0 0 0 red);
            }
            100% {
                filter: drop-shadow(0 0 4px red);
            }
        }
    `,
    renderCallback: ({inputs}) => {
        return html`
            ${getObjectTypedKeys(inputs.gamepadsWithButtonsPushed)
                .sort()
                .map((gamepadIndex) => {
                    const isGamepadActive = !!inputs.gamepadsWithButtonsPushed[gamepadIndex];
                    return getGamepadIcon(isGamepadActive);
                })}
        `;
    },
});

function getGamepadIcon(glowing: boolean): TemplateResult {
    const glowingClass = glowing ? 'glowing' : '';
    const gamepadIcon = html`
        <span class="gamepad-icon ${glowingClass}">${'🎮'}</span>
    `;

    return gamepadIcon;
}
