import {InputDevice, InputDeviceTypeEnum} from 'input-device-handler';

export function getInputDeviceIcon(inputDevice: Pick<InputDevice, 'deviceType'>): string {
    switch (inputDevice.deviceType) {
        case InputDeviceTypeEnum.Gamepad:
            return `🎮`;
        case InputDeviceTypeEnum.Keyboard:
            return `⌨️`;
        case InputDeviceTypeEnum.Mouse:
            return `🖱`;
    }
}
