import {shuffleArray} from '@augment-vir/browser';
import {wrapNumber} from '@augment-vir/common';
import {css, defineElement, html} from 'element-vir';

export type Animation = {
    timestamp: number;
};

const glowColors: string[] = shuffleArray([
    'red',
    'orange',
    'gold',
    'yellow',
    'lime',
    'green',
    'cyan',
    'blue',
    'purple',
    'magenta',
]);

const animationDuration = {milliseconds: 700};

export const VirGlowAnimation = defineElement<{
    animation: undefined | Readonly<Animation>;
}>()({
    tagName: 'vir-glow-animation',
    styles: css`
        :host {
            display: inline-flex;
        }
    `,
    stateInitStatic: {
        lastTimestamp: 0,
        colorIndex: 0,
    },
    renderCallback({inputs, host, state, updateState}) {
        const timestampCutoff = Date.now() - animationDuration.milliseconds;

        const validAnimation =
            inputs.animation && inputs.animation.timestamp > timestampCutoff
                ? inputs.animation
                : undefined;

        if (validAnimation) {
            updateState({
                colorIndex: wrapNumber({
                    min: 0,
                    max: glowColors.length - 1,
                    value: state.colorIndex + 1,
                }),
            });
        }

        const color = glowColors[state.colorIndex];

        if (!color) {
            throw new Error(`Exceeded colors array size somehow.`);
        }

        if (
            validAnimation &&
            validAnimation.timestamp !== state.lastTimestamp &&
            color != undefined
        ) {
            host.getAnimations().forEach((animation) => animation.cancel());
            host.animate(
                [
                    {
                        filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 6px ${color})`,
                    },
                    {
                        filter: `drop-shadow(0 0 0 ${color}) drop-shadow(0 0 0 ${color})`,
                    },
                ],
                {
                    duration: animationDuration.milliseconds / 2,
                    iterations: 1,
                },
            );
            updateState({lastTimestamp: validAnimation.timestamp});
        }

        return html`
            <slot></slot>
        `;
    },
});
