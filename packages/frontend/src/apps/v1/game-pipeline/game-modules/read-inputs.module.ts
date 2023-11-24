import {areJsonEqual, getObjectTypedValues, isTruthy} from '@augment-vir/common';
import {GameModule} from 'game-vir';
import {
    AllDevices,
    AnyInputDeviceKey,
    GamepadDeadZoneSettings,
    InputDevice,
} from 'input-device-handler';

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

export type BasicInputDevice = Pick<InputDevice, 'deviceKey' | 'deviceName' | 'deviceType'>;

export type DeviceInput = {
    deviceKey: AnyInputDeviceKey;
    inputName: string;
    inputValue: number;
};

export type CurrentDevices = ReadonlyArray<BasicInputDevice>;

export type GameStateForReadingInputs = {
    runTime: {
        currentDevices: CurrentDevices;
        currentInputs: ReadonlyArray<Readonly<DeviceInput>>;
    };
    settings: {
        deadZoneSettings: GamepadDeadZoneSettings;
    };
};

export const readInputsModule: GameModule<
    GameStateForReadingInputs,
    {
        inputHandler: CurrentInputsReader;
    }
> = {
    moduleId: {
        name: 'read inputs',
        version: 1,
    },
    runModule({executionContext, gameState}) {
        const allDevices = getObjectTypedValues(
            executionContext.inputHandler.readAllDevices(gameState.settings.deadZoneSettings),
        ).filter(isTruthy);

        const currentDevices = allDevices.map((currentDevice): BasicInputDevice => {
            return {
                deviceKey: currentDevice.deviceKey,
                deviceName: currentDevice.deviceName,
                deviceType: currentDevice.deviceType,
            };
        });

        const hasNewDevices = !areJsonEqual(gameState.runTime.currentDevices, currentDevices);

        const currentInputs: ReadonlyArray<Readonly<DeviceInput>> = allDevices
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

        const hasNewInputs = !areJsonEqual(gameState.runTime.currentInputs, currentInputs);

        if (!hasNewInputs && !hasNewDevices) {
            return undefined;
        }

        return {
            stateUpdate: {
                runTime: {
                    ...(hasNewDevices ? {currentDevices} : {}),
                    ...(hasNewInputs ? {currentInputs} : {}),
                },
            },
        };
    },
};
