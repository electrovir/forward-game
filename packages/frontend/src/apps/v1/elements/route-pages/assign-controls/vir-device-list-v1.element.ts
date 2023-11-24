import {css, defineElement, html} from 'element-vir';
import {InputDeviceHandler} from 'input-device-handler';
import {isIgnoredDevice} from '../../../data/forward-game-devices';
import {ForwardGameState} from '../../../game-pipeline/forward-game-pipeline';
import {BasicInputDevice} from '../../../game-pipeline/game-modules/read-inputs.module';
import {DeviceSizeEnum, VirDeviceDisplay} from './vir-device-display.element';

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
    devices: ForwardGameState['currentDevices'];
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
                <${VirDeviceDisplay.assign({
                    animated: true,
                    deviceKey: device.deviceKey,
                    displayShortKey: false,
                    size: DeviceSizeEnum.Large,
                    inputHandler: inputs.inputHandler,
                })}></${VirDeviceDisplay}>
            `;
        });

        return deviceDisplay;
    },
});
