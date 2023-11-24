import {css, defineElement, html} from 'element-vir';
import {InputDeviceHandler} from 'input-device-handler';
import {isIgnoredDevice} from '../../data/v1-ignored-devices';
import {
    BasicInputDevice,
    CurrentDevices,
} from '../../game-pipeline/game-modules/read-inputs.module';
import {DeviceSizeEnum, VirDeviceDisplayV1} from './vir-device-display-v1.element';

export function sortDevices(
    devices: ReadonlyArray<Readonly<BasicInputDevice>>,
): BasicInputDevice[] {
    return [...devices.filter((device) => !isIgnoredDevice(device.deviceKey))].sort((a, b) => {
        if (typeof a.deviceKey !== 'number') {
            return -1;
        } else if (typeof b.deviceKey !== 'number') {
            return 1;
        } else {
            return a.deviceKey - b.deviceKey;
        }
    });
}

export const VirDeviceListV1 = defineElement<{
    devices: CurrentDevices;
    showAnimations: boolean;
    inputHandler: Pick<InputDeviceHandler, 'addEventListener' | 'removeEventListener'>;
}>()({
    tagName: 'vir-device-list-v1',
    styles: css`
        :host {
            display: flex;
            gap: 32px;
        }
    `,
    renderCallback({inputs}) {
        const sortedDevices = sortDevices(inputs.devices);

        const deviceDisplay = sortedDevices.map((device) => {
            return html`
                <${VirDeviceDisplayV1.assign({
                    animated: true,
                    deviceKey: device.deviceKey,
                    displayShortKey: false,
                    size: DeviceSizeEnum.Large,
                    inputHandler: inputs.inputHandler,
                })}></${VirDeviceDisplayV1}>
            `;
        });

        return deviceDisplay;
    },
});
