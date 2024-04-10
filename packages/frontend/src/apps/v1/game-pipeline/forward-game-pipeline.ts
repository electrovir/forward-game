import {mergeDeep} from '@augment-vir/common';
import {GameModule, GamePipeline, ModulesToPipelineStates} from 'game-vir';
import {InputDeviceHandler} from 'input-device-handler';
import {PartialDeep} from 'type-fest';
import {defaultSaveAccess, gameSaveModule} from './game-modules/game-save.module';
import {defaultBindingSets} from './game-modules/inputs/default-binding-sets';
import {mapInputsToActionsModule} from './game-modules/inputs/map-inputs-to-actions.module';
import {performActionsModule} from './game-modules/inputs/perform-actions.module';
import {readInputsModule} from './game-modules/inputs/read-inputs.module';

const gameModules = [
    readInputsModule,
    mapInputsToActionsModule,
    performActionsModule,
    gameSaveModule,
] as const satisfies ReadonlyArray<GameModule<any, any>>;

export type ForwardGameState = ModulesToPipelineStates<typeof gameModules>['state'];

export type ForwardGameExecutionContext = ModulesToPipelineStates<
    typeof gameModules
>['executionContext'];

export const startNewSessionGameState = {
    runTime: {
        isPaused: false,
        haveWon: false,
        playerPosition: {
            x: 0,
            y: 0,
        },
        /**
         * This is in the new session state because it will potentially be checked with each new
         * session.
         */
        gamepadPlayerMapping: [],
    },
} as const satisfies Readonly<PartialDeep<ForwardGameState>>;

export const InitSettings = {
    settings: {
        deadZoneSettings: {},
        actionBindingGroups: defaultBindingSets,
        saveInterval: {
            milliseconds: 10_000,
        },
        customGamepadLayouts: [],
        customGamepadModelMap: {},
        selectedBindingGroups: [],
    },
} satisfies Readonly<PartialDeep<ForwardGameState>>;

const leftoverStartingGameState = {
    runTime: {
        currentActions: [],
        saveNextFrame: false,
        initialLoadAttempted: false,
        lastTimeSaved: {
            milliseconds: Date.now(),
        },
        currentDevices: {},
        currentInputs: [],
    },
} as const satisfies Readonly<PartialDeep<ForwardGameState>>;

export const startingGameStatePieces = [
    InitSettings,
    startNewSessionGameState,
    leftoverStartingGameState,
] as const;

const startingGameState = mergeDeep<ForwardGameState>(...startingGameStatePieces);

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
