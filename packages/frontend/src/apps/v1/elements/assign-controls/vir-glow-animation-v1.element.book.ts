import {defineBookPage} from 'element-book';
import {css, defineElement, html, listen} from 'element-vir';
import {gamepadInputDeviceKey} from 'input-device-handler';
import {noUserSelect} from 'vira';
import {DeviceSizeEnum, VirDeviceDisplayV1} from './vir-device-display-v1.element';
import {Animation, VirGlowAnimationV1} from './vir-glow-animation-v1.element';

const VirAnimationBookWrapperV1 = defineElement<{milliseconds: number}>()({
    tagName: 'vir-animation-book-wrapper-v1',
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
            <${VirGlowAnimationV1.assign({
                animation: state.animation,
            })}>
                <${VirDeviceDisplayV1.assign({
                    animated: false,
                    deviceKey: gamepadInputDeviceKey.gamepad1,
                    inputHandler: undefined,
                    displayShortKey: false,
                    size: DeviceSizeEnum.Large,
                })}></${VirDeviceDisplayV1}>
            </${VirGlowAnimationV1}>
        `;
    },
});

export const glowAnimationPage = defineBookPage({
    parent: undefined,
    title: VirGlowAnimationV1.tagName,
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
                    <${VirAnimationBookWrapperV1.assign({
                        milliseconds: 500,
                    })}></${VirAnimationBookWrapperV1}>
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
                    <${VirGlowAnimationV1.assign({
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
                        <${VirDeviceDisplayV1.assign({
                            animated: false,
                            deviceKey: gamepadInputDeviceKey.gamepad1,
                            inputHandler: undefined,
                            displayShortKey: false,
                            size: DeviceSizeEnum.Large,
                        })}></${VirDeviceDisplayV1}>
                    </${VirGlowAnimationV1}>
                `;
            },
        });
    },
});
