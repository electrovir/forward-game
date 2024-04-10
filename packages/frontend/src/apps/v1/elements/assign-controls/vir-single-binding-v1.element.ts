import {classMap, css, defineElement, html, renderIf} from 'element-vir';
import {InputDeviceTypeEnum} from 'input-device-handler';
import {noNativeFormStyles, viraAnimationDurations} from 'vira';
import {ActionBinding} from '../../game-pipeline/game-modules/inputs/action-binding';
import {DeviceSizeEnum, VirDeviceDisplayV1} from './vir-device-display-v1.element';

export const minBindingHeight = 52;

export const VirSingleBindingV1 = defineElement<{
    actionBinding: ActionBinding | undefined;
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
        const displayName = inputs.actionBinding?.inputName;
        const deviceKey =
            inputs.actionBinding?.deviceType === InputDeviceTypeEnum.Gamepad
                ? undefined
                : inputs.actionBinding?.deviceKey;
        const inputPlayerIndex =
            inputs.actionBinding?.deviceType === InputDeviceTypeEnum.Gamepad
                ? inputs.actionBinding.inputPlayerIndex
                : undefined;

        return html`
            <button
                class=${classMap({
                    'has-binding': !!inputs.actionBinding,
                })}
            >
                <span class="device-icon">
                    <${VirDeviceDisplayV1.assign({
                        animated: false,
                        deviceKey,
                        inputPlayerIndex,
                        inputHandler: undefined,
                        displayShortKey: true,
                        size: DeviceSizeEnum.Inline,
                    })}></${VirDeviceDisplayV1}>
                </span>
                ${
                    displayName == undefined
                        ? ''
                        : html`
                              <span class="input-name">${displayName}</span>
                          `
                }
                ${renderIf(
                    !!inputs.actionBinding,
                    html`
                        <div class="delete-message"><span>Delete</span></div>
                    `,
                )}
            </button>
        `;
    },
});
