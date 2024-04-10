import {css, defineElement, html} from 'element-vir';
import {
    AnyInputDeviceKey,
    DeviceHandlerEventTypeEnum,
    InputDeviceHandler,
    InputDeviceTypeEnum,
    deviceKeyToDeviceType,
} from 'input-device-handler';
import {AnyPlayer, PlayerIndex} from '../../game-pipeline/game-modules/inputs/action-binding';
import {Animation, VirGlowAnimationV1} from './vir-glow-animation-v1.element';

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

export const VirDeviceDisplayV1 = defineElement<{
    /**
     * `deviceKey` is `undefined` when we want to show the "add" (+) icon instead of an actual input
     * device.
     */
    deviceKey: AnyInputDeviceKey | undefined;
    animated: boolean;
    size: DeviceSizeEnum;
    /**
     * `inputPlayerIndex` is the index of the player triggering the input.
     *
     * This is `undefined` when we want to show the "add" (+) icon instead of an actual input
     * device.
     */
    inputPlayerIndex: PlayerIndex | undefined;
    displayShortKey: boolean;
    inputHandler: Pick<InputDeviceHandler, 'listen'> | undefined;
}>()({
    tagName: 'vir-device-display-v1',
    hostClasses: {
        'vir-device-display-v1-large': ({inputs}) => inputs.size === DeviceSizeEnum.Large,
        'vir-device-display-v1-inline': ({inputs}) => inputs.size === DeviceSizeEnum.Inline,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        ${hostClasses['vir-device-display-v1-large'].selector} .device-icon {
            font-size: 3em;
        }
    `,
    initCallback({inputs, state, updateState}) {
        const inputHandler = inputs.inputHandler;

        if (!state.cleanup && inputHandler && inputs.animated) {
            updateState({
                cleanup: inputHandler.listen(
                    DeviceHandlerEventTypeEnum.CurrentInputsChanged,
                    (event) => {
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
                    },
                ),
            });
        }
    },
    stateInitStatic: {
        animation: undefined as undefined | Readonly<Animation>,
        cleanup: undefined as undefined | (() => void),
    },
    cleanupCallback({state, updateState}) {
        state.cleanup?.();
        updateState({cleanup: undefined});
    },
    renderCallback({inputs, state}) {
        const emojiKey: keyof typeof deviceEmojis =
            inputs.deviceKey == undefined ? 'Add Device' : deviceKeyToDeviceType[inputs.deviceKey];
        const displayPlayerIndex =
            inputs.inputPlayerIndex === AnyPlayer ? '' : inputs.inputPlayerIndex;
        const displayDeviceKey: string | number =
            (inputs.displayShortKey && shortKeys[emojiKey]) || (displayPlayerIndex ?? emojiKey);

        return html`
            <${VirGlowAnimationV1.assign({animation: state.animation})}>
                <span title=${emojiKey} class="device-icon">${deviceEmojis[emojiKey]}</span>
            </${VirGlowAnimationV1}>
            <span>${displayDeviceKey}</span>
        `;
    },
});
