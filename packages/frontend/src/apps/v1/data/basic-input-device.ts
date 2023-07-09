import {AnyInputDeviceKey, InputDevice} from 'input-device-handler';

export type BasicInputDevice = Pick<InputDevice, 'deviceKey' | 'deviceName' | 'deviceType'>;
export type AllBasicInputDevices = Record<AnyInputDeviceKey, BasicInputDevice>;
