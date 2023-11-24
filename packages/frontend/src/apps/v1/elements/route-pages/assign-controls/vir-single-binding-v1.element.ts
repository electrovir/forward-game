import {classMap, css, defineElement, html, renderIf} from 'element-vir';
import {noNativeFormStyles, viraAnimationDurations} from 'vira';
import {
    BindingDirectionEnum,
    DeviceKey,
} from '../../../game-pipeline/game-modules/map-to-actions.module';
import {DeviceSizeEnum, VirDeviceDisplay} from './vir-device-display.element';

export const minBindingHeight = 52;

export type ActionBinding = {
    deviceKey: DeviceKey;
    inputName: string;
    direction: BindingDirectionEnum;
};

export const VirSingleBindingV1 = defineElement<{
    binding: ActionBinding | undefined;
}>()({
    tagName: 'vir-single-binding-v1',
    styles: css`
        .input-name {
            flex-grow: 1;
        }

        button {
            ${noNativeFormStyles};
            position: relative;
            cursor: pointer;
            display: flex;
            padding: 2px 16px;
            border: 2px solid #ccc;
            border-radius: 8px;
            min-height: ${minBindingHeight}px;
            align-items: center;
            gap: 16px;
        }

        * {
            transition: ${viraAnimationDurations['vira-interaction-animation-duration'].value};
        }

        button:hover {
            border-color: dodgerblue;
            background-color: rgba(30, 144, 255, 0.1);
        }

        button.has-binding:hover {
            border-color: red;
            background-color: rgba(255, 0, 0, 0.1);
        }

        button.has-binding:hover .delete-message {
            opacity: 1;
        }

        button.has-binding:hover .device-icon,
        button.has-binding:hover .input-name {
            opacity: 0;
        }

        .delete-message {
            opacity: 0;
            top: 0;
            left: 0;
            position: absolute;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `,
    renderCallback({inputs}) {
        const displayName = inputs.binding?.inputName;

        return html`
            <button
                class=${classMap({
                    'has-binding': !!inputs.binding,
                })}
            >
                <span class="device-icon">
                    <${VirDeviceDisplay.assign({
                        animated: false,
                        deviceKey: inputs.binding?.deviceKey,
                        inputHandler: undefined,
                        displayShortKey: true,
                        size: DeviceSizeEnum.Inline,
                    })}></${VirDeviceDisplay}>
                </span>
                ${displayName == undefined
                    ? ''
                    : html`
                          <span class="input-name">${displayName}</span>
                      `}
                ${renderIf(
                    !!inputs.binding,
                    html`
                        <div class="delete-message"><span>Delete</span></div>
                    `,
                )}
            </button>
        `;
    },
});
