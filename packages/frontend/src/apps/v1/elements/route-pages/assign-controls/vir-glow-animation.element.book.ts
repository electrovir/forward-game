import {defineBookPage} from 'element-book';
import {css, defineElement, html, listen} from 'element-vir';
import {gamepadInputDeviceKey} from 'input-device-handler';
import {noUserSelect} from 'vira';
import {DeviceSizeEnum, VirDeviceDisplay} from './vir-device-display.element';
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
    renderCallback({state}) {
        return html`
            <${VirGlowAnimation.assign({
                animation: state.animation,
            })}>
                <${VirDeviceDisplay.assign({
                    animated: false,
                    deviceKey: gamepadInputDeviceKey.gamepad1,
                    inputHandler: undefined,
                    displayShortKey: false,
                    size: DeviceSizeEnum.Large,
                })}></${VirDeviceDisplay}>
            </${VirGlowAnimation}>
        `;
    },
});

export const glowAnimationPage = defineBookPage({
    parent: undefined,
    title: VirGlowAnimation.tagName,
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
                    <${VirAnimationBookWrapper.assign({
                        milliseconds: 500,
                    })}></${VirAnimationBookWrapper}>
                `;
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
                }
            `,
            renderCallback({state, updateState}) {
                return html`
                    <${VirGlowAnimation.assign({
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
                        <${VirDeviceDisplay.assign({
                            animated: false,
                            deviceKey: gamepadInputDeviceKey.gamepad1,
                            inputHandler: undefined,
                            displayShortKey: false,
                            size: DeviceSizeEnum.Large,
                        })}></${VirDeviceDisplay}>
                    </${VirGlowAnimation}>
                `;
            },
        });
    },
});
