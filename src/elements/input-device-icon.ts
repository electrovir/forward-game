import {InputDevice, InputDeviceType} from 'input-device-handler';

export function getInputDeviceIcon(inputDevice: Pick<InputDevice, 'deviceType'>): string {
    switch (inputDevice.deviceType) {
        case InputDeviceType.Gamepad:
            return `🎮`;
        case InputDeviceType.Keyboard:
            return `⌨️`;
        case InputDeviceType.Mouse:
            return `🖱`;
    }
}
