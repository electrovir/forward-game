import {getOrSet, isTruthy} from '@augment-vir/common';
import {GameModule} from 'game-vir';
import {GamepadInputDeviceKey, InputDevice, InputDeviceTypeEnum} from 'input-device-handler';
import {isRunTimeType} from 'run-time-assertions';
import {
    ActionBinding,
    ActionBindingGroup,
    AnyPlayer,
    BindingDirectionEnum,
    NamedActionBindingGroups,
} from './action-binding';
import {defaultBindingSets} from './default-binding-sets';
import {DeviceInput, GameStateForReadingInputs} from './read-inputs.module';

export function determineDirection(value: number): BindingDirectionEnum {
    return value < 0 ? BindingDirectionEnum.Negative : BindingDirectionEnum.Positive;
}

export type ActionToPerform = {
    actionName: string;
    /** The player that should perform the action. */
    actingPlayerIndex: number;
    direction: BindingDirectionEnum;
    /**
     * Value for the input. For buttons this will almost always be simply 1 or 0. For axis like
     * triggers or joysticks, the values will vary from -1 to 1.
     */
    value: number;
    /** How many frames this action has been held for. */
    frameCount: number;
};

export type GamepadPlayerMapping = ReadonlyArray<
    Readonly<{
        deviceKey: GamepadInputDeviceKey;
        /** The player that the device will be assigned to. */
        actingPlayerIndex: number;
    }>
>;

export type GameStateForMappingInputs = {
    runTime: Pick<GameStateForReadingInputs['runTime'], 'currentInputs'> & {
        currentActions: ReadonlyArray<ActionToPerform>;
        /** Map devices to different players. */
        gamepadPlayerMapping: GamepadPlayerMapping;
    };
    settings: {
        actionBindingGroups: Readonly<NamedActionBindingGroups>;
        selectedBindingGroups: ReadonlyArray<{
            /** The player that will perform the actions from the assigned binding group. */
            actingPlayerIndex: number;
            /** Should correspond to one of the named binding sets. */
            bindingGroupName: string;
        }>;
    };
};

type ActionBindingWithPlayerToAct = ActionBinding & Pick<ActionToPerform, 'actingPlayerIndex'>;

type ActionBindingGroupObject = Partial<{
    [InputDeviceTypeEnum.Keyboard]: {
        [inputName: string]: Partial<Record<BindingDirectionEnum, ActionBindingWithPlayerToAct[]>>;
    };
    [InputDeviceTypeEnum.Mouse]: {
        [inputName: string]: Partial<Record<BindingDirectionEnum, ActionBindingWithPlayerToAct[]>>;
    };
    [InputDeviceTypeEnum.Gamepad]: {
        [inputPlayerIndex: number]: {
            [gamepadModelOrName: string]: {
                [layoutInputName: string]: Partial<
                    Record<BindingDirectionEnum, ActionBindingWithPlayerToAct[]>
                >;
            };
        };
        [AnyPlayer]?: {
            [gamepadModelOrName: string]: {
                [layoutInputName: string]: Partial<
                    Record<BindingDirectionEnum, ActionBindingWithPlayerToAct[]>
                >;
            };
        };
    };
}>;

export function getMappedPlayerIndexForDevice(
    device: Readonly<Pick<InputDevice, 'deviceKey'>>,
    playerIndexMapping: Readonly<GameStateForMappingInputs['runTime']['gamepadPlayerMapping']>,
): number {
    return (
        playerIndexMapping.find((indexMap) => indexMap.deviceKey === device.deviceKey)
            ?.actingPlayerIndex ??
        (isRunTimeType(device.deviceKey, 'number') ? device.deviceKey : 0)
    );
}

function getBoundActionsFromInput(
    actionBindings: ActionBindingGroupObject,
    input: Readonly<DeviceInput>,
    playerIndexMapping: GameStateForMappingInputs['runTime']['gamepadPlayerMapping'],
): ReadonlyArray<Readonly<ActionBindingWithPlayerToAct>> {
    const direction = determineDirection(input.inputValue);
    const inputPlayerIndex: number = getMappedPlayerIndexForDevice(input, playerIndexMapping);

    const inputPlayerIndexes = [
        inputPlayerIndex,
        AnyPlayer,
    ];

    const foundActionBindings: ReadonlyArray<Readonly<ActionBindingWithPlayerToAct>> =
        inputPlayerIndexes
            .flatMap((playerIndex) => {
                if (input.deviceType === InputDeviceTypeEnum.Gamepad) {
                    return actionBindings[input.deviceType]?.[playerIndex]?.[
                        input.gamepadModel || input.gamepadName
                    ]?.[input.inputName]?.[direction];
                } else {
                    return actionBindings[input.deviceType]?.[input.inputName]?.[direction];
                }
            })
            .filter(isTruthy);

    return foundActionBindings;
}

function actionBindingGroupsToObject(
    actionBindingGroups: ReadonlyArray<
        Readonly<ActionBindingGroup & Pick<ActionToPerform, 'actingPlayerIndex'>>
    >,
): ActionBindingGroupObject {
    const actionBindingGroupObject: ActionBindingGroupObject = {};

    actionBindingGroups.forEach((actionBindingGroup) => {
        actionBindingGroup.bindings.forEach((actionBinding) => {
            if (actionBinding.deviceType === InputDeviceTypeEnum.Gamepad) {
                const gamepadBindings = getOrSet(
                    actionBindingGroupObject,
                    actionBinding.deviceType,
                    () => {
                        return {};
                    },
                );

                const playerBindings = getOrSet(
                    gamepadBindings,
                    actionBinding.inputPlayerIndex,
                    () => {
                        return {};
                    },
                );

                const modelKey = actionBinding.gamepadModelName || actionBinding.gamepadName;

                const modelBindings = getOrSet(playerBindings, modelKey, () => {
                    return {};
                });

                const directionBindings = getOrSet(
                    modelBindings,
                    actionBinding.gamepadLayoutInputName || actionBinding.inputName,
                    () => {
                        return {};
                    },
                );

                const bindingsArray = getOrSet(
                    directionBindings,
                    actionBinding.direction,
                    () => [],
                );

                bindingsArray.push({
                    ...actionBinding,
                    actingPlayerIndex: actionBindingGroup.actingPlayerIndex,
                });
            } else {
                const deviceBindings = getOrSet(
                    actionBindingGroupObject,
                    actionBinding.deviceType,
                    () => {
                        return {};
                    },
                );

                const directionBindings = getOrSet(deviceBindings, actionBinding.inputName, () => {
                    return {};
                });

                const bindingsArray = getOrSet(
                    directionBindings,
                    actionBinding.direction,
                    () => [],
                );

                bindingsArray.push({
                    ...actionBinding,
                    actingPlayerIndex: actionBindingGroup.actingPlayerIndex,
                });
            }
        });
    });

    return actionBindingGroupObject;
}

export const mapInputsToActionsModule: GameModule<GameStateForMappingInputs> = {
    moduleId: {
        name: 'map inputs to actions',
        version: 1,
    },
    runModule({gameState}) {
        const currentActionBindingGroups: ReadonlyArray<
            Readonly<ActionBindingGroup & Pick<ActionToPerform, 'actingPlayerIndex'>>
        > = gameState.settings.selectedBindingGroups.map(
            (
                groupSelection,
            ): Readonly<ActionBindingGroup & Pick<ActionToPerform, 'actingPlayerIndex'>> => {
                const selectedGroup =
                    gameState.settings.actionBindingGroups[groupSelection.bindingGroupName];

                return {
                    ...(selectedGroup || defaultBindingSets.default),
                    actingPlayerIndex: groupSelection.actingPlayerIndex,
                };
            },
        );

        const actionBindingObject = actionBindingGroupsToObject(currentActionBindingGroups);

        const currentActions: ReadonlyArray<ActionToPerform> =
            gameState.runTime.currentInputs.reduce((accum, deviceInput) => {
                const boundActions = getBoundActionsFromInput(
                    actionBindingObject,
                    deviceInput,
                    gameState.runTime.gamepadPlayerMapping,
                );

                boundActions.forEach((boundAction) => {
                    const existingAction = gameState.runTime.currentActions.find(
                        (existingAction) =>
                            existingAction.actionName === boundAction.actionName &&
                            existingAction.direction === boundAction.direction,
                    );

                    accum.push({
                        actionName: boundAction.actionName,
                        direction: boundAction.direction,
                        frameCount: (existingAction?.frameCount || 0) + 1,
                        value: deviceInput.inputValue,
                        actingPlayerIndex: boundAction.actingPlayerIndex,
                    });
                });

                return accum;
            }, [] as ActionToPerform[]);

        return {
            stateUpdate: {
                runTime: {
                    currentActions,
                },
            },
        };
    },
};
