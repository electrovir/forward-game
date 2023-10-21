import {GameModule} from 'game-vir';
import {GameStateForReadingInputs} from './read-inputs.game-module';

export enum BindingDirectionEnum {
    Positive = 'positive',
    Negative = 'negative',
}

export type DeadZoneSettings = {
    [
        inputName: string
    ]: /** The minimum value, in either direction for an input to be considered as triggering an action. */
    number;
};

export type InputBindings = {
    [deviceName: string]: {
        [inputName: string]: Partial<
            Record<
                BindingDirectionEnum,
                /** Action name */
                string
            >
        >;
    };
};

export type InputAction = {actionName: string; value: number};

export type GameStateForMappingInputs = Pick<GameStateForReadingInputs, 'currentInputs'> & {
    currentActions: ReadonlyArray<InputAction>;
    inputBindings: Readonly<InputBindings>;
    deadZoneSettings: DeadZoneSettings;
};

export const mapInputsToActions: GameModule<GameStateForMappingInputs> = {
    moduleId: {
        name: 'map inputs to actions',
        version: 1,
    },
    runModule({gameState}) {
        const currentActions: ReadonlyArray<InputAction> = gameState.currentInputs.reduce(
            (accum, deviceInput) => {
                const boundAction =
                    gameState.inputBindings[deviceInput.deviceKey]?.[deviceInput.inputName];

                if (!boundAction) {
                    return accum;
                }

                const deadZoneSetting = gameState.deadZoneSettings[deviceInput.inputName] ?? 0;

                const filteredInputValue =
                    deviceInput.inputValue > deadZoneSetting ? deviceInput.inputValue : 0;

                /** No action to perform is input is not active pressed. */
                if (!filteredInputValue) {
                    return accum;
                }

                const direction: BindingDirectionEnum =
                    filteredInputValue < 0
                        ? BindingDirectionEnum.Negative
                        : BindingDirectionEnum.Positive;

                const finalBinding = boundAction[direction];

                if (!finalBinding) {
                    return accum;
                }

                accum.push({
                    actionName: finalBinding,
                    value: deviceInput.inputValue,
                });

                return accum;
            },
            [] as InputAction[],
        );

        return {
            stateChange: {
                currentActions,
            },
        };
    },
};
