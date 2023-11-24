import {css, defineElement, html} from 'element-vir';
import {
    AnyInputDeviceKey,
    CurrentInputsChangedOutput,
    InputDeviceEventTypeEnum,
    InputDeviceHandler,
    InputDeviceTypeEnum,
    TimedEvent,
    deviceKeyToDeviceType,
} from 'input-device-handler';
import {DeviceKey} from '../../../game-pipeline/game-modules/map-to-actions.module';
import {Animation, VirGlowAnimation} from './vir-glow-animation.element';

export enum DeviceSizeEnum {
    Large = 'large',
    Inline = 'inline',
}

export type InputDeviceAnimation = {
    timestamp: number;
};

const deviceEmojis = {
    [InputDeviceTypeEnum.Gamepad]: `🎮`,
    [InputDeviceTypeEnum.Keyboard]: `⌨️`,
    [InputDeviceTypeEnum.Mouse]: `🖱`,
    'Add Device': `➕`,
} as const satisfies Readonly<Record<InputDeviceTypeEnum, string>> & Record<string, string>;

const shortKeys: Partial<Record<InputDeviceTypeEnum | string, string>> = {
    [InputDeviceTypeEnum.Keyboard]: 'kb',
    [InputDeviceTypeEnum.Mouse]: 'm',
    'Add Device': 'add',
} satisfies Partial<Record<keyof typeof deviceEmojis, string>>;

export const VirDeviceDisplay = defineElement<{
    deviceKey: DeviceKey | undefined;
    animated: boolean;
    size: DeviceSizeEnum;
    displayShortKey: boolean;
    inputHandler: Pick<InputDeviceHandler, 'addEventListener' | 'removeEventListener'> | undefined;
}>()({
    tagName: 'vir-device-display',
    hostClasses: {
        'vir-device-display-large': ({inputs}) => inputs.size === DeviceSizeEnum.Large,
        'vir-device-display-inline': ({inputs}) => inputs.size === DeviceSizeEnum.Inline,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        ${hostClasses['vir-device-display-large'].selector} .device-icon {
            font-size: 3em;
        }
    `,
    initCallback({inputs, state, updateState}) {
        const inputHandler = inputs.inputHandler;
        if (!state.removeListeners && inputHandler && inputs.animated) {
            function newInputListener(
                event: TimedEvent<
                    CurrentInputsChangedOutput,
                    InputDeviceEventTypeEnum.CurrentInputsChanged
                >,
            ) {
                const hasNewInputsForDevice = event.detail.inputs.newInputs.some(
                    (inputValue) => inputValue.deviceKey === inputs.deviceKey,
                );

                if (hasNewInputsForDevice) {
                    updateState({
                        animation: {
                            timestamp: Date.now(),
                        },
                    });
                }
            }

            inputHandler.addEventListener(
                InputDeviceEventTypeEnum.CurrentInputsChanged,
                newInputListener,
            );

            updateState({
                removeListeners() {
                    inputHandler.removeEventListener(
                        InputDeviceEventTypeEnum.CurrentInputsChanged,
                        newInputListener,
                    );
                },
            });
        }
    },
    stateInitStatic: {
        animation: undefined as undefined | Readonly<Animation>,
        removeListeners: undefined as undefined | (() => void),
    },
    cleanupCallback({state}) {
        state.removeListeners?.();
    },
    renderCallback({inputs, state}) {
        const emojiKey: keyof typeof deviceEmojis =
            inputs.deviceKey == undefined
                ? 'Add Device'
                : deviceKeyToDeviceType[inputs.deviceKey as AnyInputDeviceKey];
        const displayKey: string | number =
            (inputs.displayShortKey && shortKeys[emojiKey]) || (inputs.deviceKey ?? emojiKey);

        return html`
            <${VirGlowAnimation.assign({animation: state.animation})}>
                <span title=${emojiKey} class="device-icon">${deviceEmojis[emojiKey]}</span>
            </${VirGlowAnimation}>
            <span>${displayKey}</span>
        `;
    },
});
