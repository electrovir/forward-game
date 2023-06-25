import {InputDevice} from 'input-device-handler';

export type BasicInputDevice = Pick<InputDevice, 'deviceKey' | 'deviceName' | 'deviceType'>;
