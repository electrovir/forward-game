import {defineBookPage} from 'element-book';
import {css, defineElement, html, listen} from 'element-vir';
import {noUserSelect} from 'vira';
import {GlowAnimation, VirRainbowGlow} from './vir-rainbow-glow.element';

const VirRainbowGlowBookWrapper = defineElement<{milliseconds: number}>()({
    tagName: 'vir-rainbow-glow-book-wrapper',
    stateInitStatic: {
        intervalId: undefined as undefined | number,
        animation: undefined as undefined | Readonly<GlowAnimation>,
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
    renderCallback({state}) {
        return html`
            <${VirRainbowGlow.assign({
                animation: state.animation,
            })}>
                ⚪️
            </${VirRainbowGlow}>
        `;
    },
});

export const virRainbowGlowBookPage = defineBookPage({
    parent: undefined,
    title: VirRainbowGlow.tagName,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'automatic',
            styles: css`
                :host {
                    ${noUserSelect};
                }
            `,
            renderCallback() {
                return html`
                    <${VirRainbowGlowBookWrapper.assign({
                        milliseconds: 500,
                    })}></${VirRainbowGlowBookWrapper}>
                `;
            },
        });
        defineExample({
            title: 'on click',
            stateInitStatic: {
                animation: undefined as undefined | Readonly<GlowAnimation>,
            },
            styles: css`
                :host {
                    ${noUserSelect};
                }
            `,
            renderCallback({state, updateState}) {
                return html`
                    <${VirRainbowGlow.assign({
                        animation: state.animation,
                    })}
                        ${listen('click', () => {
                            updateState({
                                animation: {
                                    timestamp: Date.now(),
                                },
                            });
                        })}
                    >
                        ⚪️
                    </${VirRainbowGlow}>
                `;
            },
        });
    },
});
