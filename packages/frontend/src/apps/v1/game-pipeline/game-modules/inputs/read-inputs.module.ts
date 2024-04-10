import {areJsonEqual, getObjectTypedValues, isTruthy} from '@augment-vir/common';
import {GameModule} from 'game-vir';
import {
    GamepadLayout,
    PredefinedGamepadModel,
    defaultGamepadLayouts,
    defaultGamepadModelMap,
    findMatchingGamepadLayout,
    findMatchingGamepadModel,
} from 'gamepad-type';
import {
    AllDevices,
    AllGamepadDeadZoneSettings,
    AnyInputDeviceKey,
    GamepadDevice,
    GamepadInputDeviceKey,
    InputDeviceTypeEnum,
    KeyboardDevice,
    MouseDevice,
    NonGamepadInputDeviceKey,
} from 'input-device-handler';
import {Writable} from 'type-fest';

export type CurrentInputsReader = {
    readAllDevices(deadZoneSettings: AllGamepadDeadZoneSettings): {
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

export type BasicInputDevice =
    | (Pick<KeyboardDevice | MouseDevice, 'deviceKey' | 'deviceName' | 'deviceType'> & {
          gamepadModel: undefined;
          gamepadLayout: undefined;
      })
    | (Pick<GamepadDevice, 'deviceKey' | 'deviceName' | 'deviceType'> & {
          gamepadModel: string | undefined;
          gamepadLayout: GamepadLayout | undefined;
      });

export type DeviceInput =
    | {
          deviceType: InputDeviceTypeEnum.Mouse | InputDeviceTypeEnum.Keyboard;
          deviceKey: NonGamepadInputDeviceKey;
          inputName: string;
          inputValue: number;
      }
    | {
          deviceType: InputDeviceTypeEnum.Gamepad;
          deviceKey: GamepadInputDeviceKey;
          gamepadLayout: GamepadLayout | undefined;
          gamepadModel: string | undefined;
          gamepadName: string;
          inputName: string;
          inputValue: number;
      };

export type CurrentDevices = Partial<Readonly<Record<AnyInputDeviceKey, BasicInputDevice>>>;

export type GameStateForReadingInputs = {
    runTime: {
        currentDevices: CurrentDevices;
        currentInputs: ReadonlyArray<Readonly<DeviceInput>>;
    };
    settings: {
        deadZoneSettings: AllGamepadDeadZoneSettings;
        /**
         * Custom mapping of gamepad ids / names to their model names. This will override the
         * default gamepad model mapping.
         */
        customGamepadModelMap: {[gamepadId: string]: PredefinedGamepadModel};
        customGamepadLayouts: GamepadLayout[];
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
        const allDevices = executionContext.inputHandler.readAllDevices(
            gameState.settings.deadZoneSettings,
        );

        const gamepadModelMap = {
            ...defaultGamepadModelMap,
            ...gameState.settings.customGamepadModelMap,
        };
        const gamepadLayouts = [
            ...gameState.settings.customGamepadLayouts,
            ...defaultGamepadLayouts,
        ];

        const currentDevicesArray = getObjectTypedValues(allDevices)
            .filter(isTruthy)
            .map((currentDevice): BasicInputDevice => {
                if (currentDevice.deviceType === InputDeviceTypeEnum.Gamepad) {
                    const gamepadModel = findMatchingGamepadModel({
                        gamepad: currentDevice,
                        gamepadModelMap,
                    }).gamepadModel;

                    return {
                        deviceKey: currentDevice.deviceKey,
                        deviceName: currentDevice.deviceName,
                        deviceType: currentDevice.deviceType,
                        gamepadModel:
                            gamepadModel === PredefinedGamepadModel.Unknown
                                ? undefined
                                : gamepadModel,
                        gamepadLayout: findMatchingGamepadLayout({
                            gamepad: currentDevice,
                            gamepadModelMap,
                            layouts: gamepadLayouts,
                        }),
                    };
                } else {
                    return {
                        deviceKey: currentDevice.deviceKey,
                        deviceName: currentDevice.deviceName,
                        deviceType: currentDevice.deviceType,
                        gamepadModel: undefined,
                        gamepadLayout: undefined,
                    };
                }
            });

        const hasNewDevices = !areJsonEqual(gameState.runTime.currentDevices, currentDevicesArray);

        const currentInputs: ReadonlyArray<Readonly<DeviceInput>> = currentDevicesArray
            .map((currentDevice) =>
                getObjectTypedValues(allDevices[currentDevice.deviceKey]?.currentInputs || {}).map(
                    (currentInput): DeviceInput => {
                        if (currentDevice.deviceType === InputDeviceTypeEnum.Gamepad) {
                            return {
                                deviceKey: currentDevice.deviceKey,
                                deviceType: currentDevice.deviceType,
                                gamepadLayout: currentDevice.gamepadLayout,
                                gamepadModel: currentDevice.gamepadModel,
                                gamepadName: currentDevice.deviceName,
                                inputName: currentInput.inputName,
                                inputValue: currentInput.inputValue,
                            };
                        } else {
                            return {
                                deviceType: currentDevice.deviceType,
                                deviceKey: currentDevice.deviceKey,
                                inputName: currentInput.inputName,
                                inputValue: currentInput.inputValue,
                            };
                        }
                    },
                ),
            )
            .flat();

        const hasNewInputs = !areJsonEqual(gameState.runTime.currentInputs, currentInputs);

        if (!hasNewInputs && !hasNewDevices) {
            return undefined;
        }

        const currentDevicesObject = currentDevicesArray.reduce(
            (accum: Writable<CurrentDevices>, currentDevice) => {
                accum[currentDevice.deviceKey] = currentDevice;
                return accum;
            },
            {},
        );

        return {
            stateUpdate: {
                runTime: {
                    ...(hasNewDevices ? {currentDevices: currentDevicesObject} : {}),
                    ...(hasNewInputs ? {currentInputs} : {}),
                },
            },
        };
    },
};
