import {mergeDeep} from '@augment-vir/common';
import {GameModule, GamePipeline, ModulesToPipelineStates} from 'game-vir';
import {InputDeviceHandler} from 'input-device-handler';
import {PartialDeep} from 'type-fest';
import {defaultSaveAccess, gameSaveModule} from './game-modules/game-save.module';
import {mapToActionsModule} from './game-modules/map-to-actions.module';
import {defaultBindings, performActionsModule} from './game-modules/perform-actions.module';
import {readInputsModule} from './game-modules/read-inputs.module';

const gameModules = [
    readInputsModule,
    mapToActionsModule,
    performActionsModule,
    gameSaveModule,
] as const satisfies ReadonlyArray<GameModule<any, any>>;

export type ForwardGameState = ModulesToPipelineStates<typeof gameModules>['state'];

export type ForwardGameExecutionContext = ModulesToPipelineStates<
    typeof gameModules
>['executionContext'];

export const startNewRunGameState = {
    runTime: {
        isPaused: false,
        haveWon: false,
        playerPosition: {
            x: 0,
            y: 0,
        },
    },
} as const satisfies Readonly<PartialDeep<ForwardGameState>>;

export const resetToDefaultsGameState = {
    settings: {
        deadZoneSettings: {},
        actionBindings: defaultBindings,
        saveInterval: {
            milliseconds: 10000,
        },
    },
} as const satisfies Readonly<PartialDeep<ForwardGameState>>;

const startingGameState = mergeDeep<ForwardGameState>(
    resetToDefaultsGameState,
    startNewRunGameState,
    {
        runTime: {
            currentActions: [],
            saveNextFrame: false,
            initialLoadAttempted: false,
            lastTimeSaved: {
                milliseconds: Date.now(),
            },
            currentDevices: [],
            currentInputs: [],
        },
    },
);

export function createForwardGamePipeline({
    startImmediately,
    delay,
}: {
    startImmediately: boolean;
    delay?: {milliseconds: number} | undefined;
}) {
    const forwardGamePipeline = new GamePipeline(
        /** Insert the full device handler type even if the original modules only need parts of it. */
        gameModules as unknown as [
            ...typeof gameModules,
            GameModule<{}, {inputHandler: InputDeviceHandler}>,
        ],
        startingGameState,
        {
            inputHandler: new InputDeviceHandler(),
            saveAccess: defaultSaveAccess,
        },
        {
            init: {
                startLoopImmediately: delay ? false : startImmediately,
            },
        },
    );

    if (startImmediately && delay?.milliseconds) {
        setInterval(() => {
            forwardGamePipeline.triggerSingleFrame();
        }, delay.milliseconds);
    }

    return forwardGamePipeline;
}

export type ForwardGamePipeline = ReturnType<typeof createForwardGamePipeline>;
