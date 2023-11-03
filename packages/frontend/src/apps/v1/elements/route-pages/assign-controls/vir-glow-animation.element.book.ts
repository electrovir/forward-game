import {defineBookPage} from 'element-book';
import {css, defineElement, html, listen} from 'element-vir';
import {InputDeviceTypeEnum} from 'input-device-handler';
import {noUserSelect} from 'vira';
import {deviceEmojis} from '../../device-display';
import {Animation, VirGlowAnimation} from './vir-glow-animation.element';

const VirAnimationBookWrapper = defineElement<{milliseconds: number}>()({
    tagName: 'vir-animation-book-wrapper',
    stateInitStatic: {
        intervalId: undefined as undefined | number,
        animation: undefined as undefined | Readonly<Animation>,
    },
    initCallback({state, updateState, inputs}) {
        if (state.intervalId == undefined) {
            updateState({
                intervalId: window.setInterval(() => {
                    updateState({animation: {timestamp: Date.now()}});
                }, inputs.milliseconds),
            });
        }
    },
    cleanupCallback({state, updateState}) {
        if (state.intervalId != undefined) {
            window.clearInterval(state.intervalId);
            updateState({intervalId: undefined});
        }
    },
    styles: css`
        :host {
            font-size: 4em;
        }
    `,
    renderCallback({state}) {
        return html`<${VirGlowAnimation.assign({
            animation: state.animation,
        })}>${deviceEmojis[InputDeviceTypeEnum.Gamepad]}</${VirGlowAnimation}>`;
    },
});

export const glowAnimationPage = defineBookPage({
    parent: undefined,
    title: VirGlowAnimation.tagName,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'automatic',
            renderCallback() {
                return html`<${VirAnimationBookWrapper.assign({
                    milliseconds: 500,
                })}></${VirAnimationBookWrapper}>`;
            },
        });
        defineExample({
            title: 'on click',
            stateInitStatic: {
                animation: undefined as undefined | Readonly<Animation>,
            },
            styles: css`
                :host {
                    ${noUserSelect};
                    font-size: 4em;
                }
            `,
            renderCallback({state, updateState}) {
                return html`<${VirGlowAnimation.assign({
                    animation: state.animation,
                })} ${listen('click', () => {
                    updateState({
                        animation: {
                            timestamp: Date.now(),
                        },
                    });
                })}>${deviceEmojis[InputDeviceTypeEnum.Gamepad]}</${VirGlowAnimation}>`;
            },
        });
    },
});
