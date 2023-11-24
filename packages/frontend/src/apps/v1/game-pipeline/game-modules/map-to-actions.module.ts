import {GameModule} from 'game-vir';
import {GameStateForReadingInputs} from './read-inputs.module';

export type DeviceKey = string | number;

export enum BindingDirectionEnum {
    Positive = 'positive',
    Negative = 'negative',
}

export function determineDirection(value: number): BindingDirectionEnum {
    return value < 0 ? BindingDirectionEnum.Negative : BindingDirectionEnum.Positive;
}

export type DevicesToActionNameBindings = Partial<{
    [deviceKey: DeviceKey]: {
        [inputName: string]: Partial<
            Record<
                BindingDirectionEnum,
                /** Action name */
                ReadonlyArray<string>
            >
        >;
    };
}>;

export type InputAction = {
    actionName: string;
    direction: BindingDirectionEnum;
    /**
     * Value for the input. For buttons this will almost always be simply 1 or 0. For axis like
     * triggers or joysticks, the values will vary from -1 to 1.
     */
    value: number;
    /** How many frames this action has been held for. */
    frameCount: number;
};

export type GameStateForMappingInputs = {
    runTime: Pick<GameStateForReadingInputs['runTime'], 'currentInputs'> & {
        currentActions: ReadonlyArray<InputAction>;
    };
    settings: {
        actionBindings: Readonly<DevicesToActionNameBindings>;
    };
};

export const mapToActionsModule: GameModule<GameStateForMappingInputs> = {
    moduleId: {
        name: 'map inputs to actions',
        version: 1,
    },
    runModule({gameState}) {
        const currentActions: ReadonlyArray<InputAction> = gameState.runTime.currentInputs.reduce(
            (accum, deviceInput) => {
                const boundAction =
                    gameState.settings.actionBindings[deviceInput.deviceKey]?.[
                        deviceInput.inputName
                    ];

                if (!boundAction) {
                    return accum;
                }

                /** No action to perform is input is not active pressed. */
                if (!deviceInput.inputValue) {
                    return accum;
                }

                const direction: BindingDirectionEnum = determineDirection(deviceInput.inputValue);

                const allBoundActionNames = boundAction[direction];

                if (!allBoundActionNames) {
                    return accum;
                }
                accum.push(
                    ...allBoundActionNames.map((newActionName): InputAction => {
                        const newActionDirection = determineDirection(deviceInput.inputValue);

                        const currentMatchingAction = gameState.runTime.currentActions.find(
                            (currentAction) =>
                                currentAction.actionName === newActionName &&
                                currentAction.direction === newActionDirection,
                        );

                        return {
                            actionName: newActionName,
                            value: deviceInput.inputValue,
                            direction: newActionDirection,
                            frameCount: (currentMatchingAction?.frameCount || 0) + 1,
                        };
                    }),
                );

                return accum;
            },
            [] as InputAction[],
        );

        return {
            stateUpdate: {
                runTime: {
                    currentActions,
                },
            },
        };
    },
};
