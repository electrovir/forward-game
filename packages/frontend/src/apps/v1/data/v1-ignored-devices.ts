import {AnyInputDeviceKey} from 'input-device-handler';

const ignoredDeviceKeys = new Set<AnyInputDeviceKey>(['mouse']);

export function isIgnoredDevice(deviceKey: AnyInputDeviceKey) {
    return ignoredDeviceKeys.has(deviceKey);
}
