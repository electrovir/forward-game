import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {InputDeviceTypeEnum} from 'input-device-handler';
import {BindingDirectionEnum} from '../../game-pipeline/game-modules/inputs/action-binding';
import {VirBindingsTableV1} from './vir-bindings-table-v1.element';

export const actionBindingsV1Page = defineBookPage({
    parent: undefined,
    title: VirBindingsTableV1.tagName,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'no existing bindings',
            renderCallback() {
                return html`
                    <${VirBindingsTableV1.assign({
                        bindingGroup: {
                            bindings: [],
                            isDefault: false,
                            name: 'Example 1',
                        },
                        showBindingsForUnconnectedGamepads: true,
                        requiredActionNames: [
                            'cut tree',
                            'eat food',
                            'move',
                            'sleep',
                            'walk',
                        ],
                    })}></${VirBindingsTableV1}>
                `;
            },
        });

        defineExample({
            title: 'with some bindings',
            renderCallback() {
                return html`
                    <${VirBindingsTableV1.assign({
                        showBindingsForUnconnectedGamepads: true,
                        bindingGroup: {
                            bindings: [
                                {
                                    deviceType: InputDeviceTypeEnum.Gamepad,
                                    actionName: 'cut tree',
                                    direction: BindingDirectionEnum.Positive,
                                    gamepadLayoutInputName: undefined,
                                    gamepadModelName: undefined,
                                    gamepadName: '',
                                    inputName: 'button-1',
                                    inputPlayerIndex: 0,
                                },
                                {
                                    deviceType: InputDeviceTypeEnum.Keyboard,
                                    actionName: 'cut tree',
                                    deviceKey: 'keyboard',
                                    direction: BindingDirectionEnum.Positive,
                                    inputName: 'button-long-button-name',
                                },
                                {
                                    deviceType: InputDeviceTypeEnum.Mouse,
                                    actionName: 'move',
                                    deviceKey: 'mouse',
                                    direction: BindingDirectionEnum.Positive,
                                    inputName: 'button-0',
                                },
                                {
                                    deviceType: InputDeviceTypeEnum.Mouse,
                                    actionName: 'ignored-action',
                                    deviceKey: 'mouse',
                                    direction: BindingDirectionEnum.Positive,
                                    inputName: 'button-1',
                                },
                            ],
                            isDefault: false,
                            name: 'Example 2',
                        },
                        requiredActionNames: [
                            'cut tree',
                            'eat food',
                            'move',
                            'sleep',
                            'walk',
                        ],
                    })}></${VirBindingsTableV1}>
                `;
            },
        });
    },
});
