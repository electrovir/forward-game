import {getObjectTypedValues, isTruthy} from '@augment-vir/common';
import {GameModule} from 'game-vir';
import {AllDevices, GamepadDeadZoneSettings, InputDevice} from 'input-device-handler';

export type CurrentInputsReader = {
    readAllDevices(deadZoneSettings: GamepadDeadZoneSettings): {
        [DeviceKey in keyof AllDevices]: Pick<
            NonNullable<AllDevices[DeviceKey]>,
            'deviceKey' | 'deviceName' | 'deviceType'
        > & {
            currentInputs: {
                [InputKey in keyof NonNullable<AllDevices[DeviceKey]>['currentInputs']]: Pick<
                    NonNullable<AllDevices[DeviceKey]>['currentInputs'][InputKey],
                    'deviceKey' | 'inputName' | 'inputValue'
                >;
            };
        };
    };
};

export type ExecutionContextForReadingInputs = {
    inputHandler: CurrentInputsReader;
};

export type BasicInputDevice = Pick<InputDevice, 'deviceKey' | 'deviceName' | 'deviceType'>;

export type DeviceInput = {
    deviceKey: string | number;
    inputName: string;
    inputValue: number;
};

export type GameStateForReadingInputs = {
    currentDevices: ReadonlyArray<BasicInputDevice>;
    currentInputs: ReadonlyArray<Readonly<DeviceInput>>;
    deadZoneSettings: GamepadDeadZoneSettings;
};

export const defaultGameStateForReadingInputs: GameStateForReadingInputs = {
    currentDevices: [],
    deadZoneSettings: {},
    currentInputs: [],
};

export const readInputs: GameModule<GameStateForReadingInputs, ExecutionContextForReadingInputs> = {
    moduleId: {
        name: 'read inputs',
        version: 1,
    },
    runModule({executionContext, gameState}) {
        const allDevices = getObjectTypedValues(
            executionContext.inputHandler.readAllDevices(gameState.deadZoneSettings),
        );
        const currentDevices = allDevices
            .filter(isTruthy)
            .map((currentDevice): BasicInputDevice => {
                return {
                    deviceKey: currentDevice.deviceKey,
                    deviceName: currentDevice.deviceName,
                    deviceType: currentDevice.deviceType,
                };
            });

        const currentInputs: ReadonlyArray<Readonly<DeviceInput>> = allDevices
            .filter(isTruthy)
            .map((device) =>
                getObjectTypedValues(device.currentInputs).map((currentInput): DeviceInput => {
                    return {
                        deviceKey: currentInput.deviceKey,
                        inputName: currentInput.inputName,
                        inputValue: currentInput.inputValue,
                    };
                }),
            )
            .flat();

        return {
            stateChange: {
                currentDevices,
                currentInputs,
            },
        };
    },
};
