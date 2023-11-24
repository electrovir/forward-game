import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {gamepadInputDeviceKey} from 'input-device-handler';
import {BindingDirectionEnum} from '../../game-pipeline/game-modules/map-to-actions.module';
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
                        bindings: {},
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
                        bindings: {
                            [gamepadInputDeviceKey.gamepad1]: {
                                'button-1': {
                                    [BindingDirectionEnum.Positive]: [
                                        'cut tree',
                                    ],
                                },
                            },
                            keyboard: {
                                'button-long-button-name': {
                                    [BindingDirectionEnum.Positive]: [
                                        'cut tree',
                                    ],
                                },
                            },
                            mouse: {
                                'button-0': {
                                    [BindingDirectionEnum.Positive]: [
                                        'move',
                                    ],
                                },
                                'button-1': {
                                    [BindingDirectionEnum.Positive]: [
                                        'ignored-action',
                                    ],
                                },
                            },
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
