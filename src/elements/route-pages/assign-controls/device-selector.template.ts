import {html, listen} from 'element-vir';
import {PotentialDeviceKeys} from 'input-device-handler';
import {TemplateResult} from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {BasicInputDevice} from '../../../data/basic-input-device';
import {getInputDeviceIcon} from '../../input-device-icon';
import {InputDeviceAnimation} from './vir-assign-controls.element';

const glowColors = [
    'red',
    'orange',
    'gold',
    'yellow',
    'lime',
    'green',
    'cyan',
    'blue',
    'purple',
    'magenta',
];

export function getDeviceSelectorTemplate({
    inputDevice,
    animations,
    selectedCallback,
    selectedKey,
    isTopLevel = false,
}: {
    inputDevice: BasicInputDevice;
    animations: InputDeviceAnimation[];
    selectedCallback: () => void;
    selectedKey: PotentialDeviceKeys | undefined;
    isTopLevel: boolean;
}): TemplateResult {
    const icon = getInputDeviceIcon(inputDevice);
    const glowColor = isTopLevel ? glowColors[Math.floor(Math.random() * glowColors.length)] : '';

    const extraClass = isTopLevel
        ? 'animated-icon'
        : selectedKey === inputDevice.deviceKey
        ? 'selected'
        : '';
    const style = glowColor ? `--glow-color: ${glowColor};` : '';

    const gamepadIcon = html`
        <div
            class="input-device-selector ${extraClass}"
            style=${style}
            ${listen('click', selectedCallback)}
        >
            <span class="device-icon">${icon}</span>
            <span class="device-name">${inputDevice.deviceName}</span>
            ${repeat(
                animations,
                (item) => item.timestamp,
                () =>
                    getDeviceSelectorTemplate({
                        inputDevice,
                        animations: [],
                        selectedCallback,
                        selectedKey: undefined,
                        isTopLevel: true,
                    }),
            )}
        </div>
    `;

    return gamepadIcon;
}
