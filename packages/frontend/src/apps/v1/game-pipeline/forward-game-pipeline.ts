import {GameModule, GamePipeline, GamePipelineStates} from 'game-vir';
import {InputDeviceHandler} from 'input-device-handler';
import {createSaveGameModule, defaultSaveGameAccess} from './game-modules/game-save.module';
import {mapToActionsModule} from './game-modules/map-to-actions.module';
import {performActionsModule} from './game-modules/perform-actions.module';
import {readInputsModule} from './game-modules/read-inputs.module';

export function createForwardGamePipeline({
    startImmediately,
    delay,
}: {
    startImmediately: boolean;
    delay?: {milliseconds: number} | undefined;
}) {
    const gameModules = [
        readInputsModule,
        mapToActionsModule,
        performActionsModule,
        createSaveGameModule([
            'deadZoneSettings',
            'actionBindings',
            'saveInterval',
        ]),
    ] as const;

    const forwardGamePipeline = new GamePipeline(
        /** Insert the full device handler type even if the original modules only need parts of it. */
        gameModules as unknown as [
            ...typeof gameModules,
            GameModule<{}, {inputHandler: InputDeviceHandler}>,
        ],
        {
            currentActions: [],
            currentDevices: [],
            currentInputs: [],
            deadZoneSettings: {},
            actionBindings: {},
            isPaused: true,
            saveInterval: {
                milliseconds: 10_000,
            },
            playerPosition: {
                x: 0,
                y: 0,
            },
            haveWon: false,
            initialLoadAttempted: false,
            saveNextFrame: false,
        },
        {
            inputHandler: new InputDeviceHandler(),
            lastTimeSaved: {
                milliseconds: Date.now(),
            },
            saveGameAccess: defaultSaveGameAccess,
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

export type ForwardGameState = GamePipelineStates<ForwardGamePipeline>['state'];

export type ForwardGameExecutionContext =
    GamePipelineStates<ForwardGamePipeline>['executionContext'];
