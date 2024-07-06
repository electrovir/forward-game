import {readActionsStage, readRawInputStage} from '@game-vir/handle-input';
import {InputDeviceHandler} from 'input-device-handler';
import {VirLine, VirLineStage} from 'vir-line';
import {loadSavedState} from '../storage/storage';
import {performActionsStage} from './stages/perform-actions.stage';
import {renderGameStage} from './stages/render-game.stage';
import {defaultPlayersActionsBindingsMap} from './state/default-actions-bindings';

const stages = [
    readRawInputStage,
    readActionsStage,
    performActionsStage,
    renderGameStage,
] as const satisfies ReadonlyArray<VirLineStage<any>>;

export async function createForwardGamePipeline(): Promise<ForwardGamePipeline> {
    const savedState = await loadSavedState();

    return new VirLine<typeof stages>(
        stages,
        {
            deviceHandler: new InputDeviceHandler({
                disableMouseMovement: true,
            }),
            playersActionsBindings: savedState?.bindings || defaultPlayersActionsBindingsMap,
            options: {
                playerCount: savedState?.playerCount || 1,
            },
        },
        {
            init: {
                startUpdateLoopImmediately: true,
            },
        },
    ) as any;
}

export type ForwardGamePipeline = VirLine<typeof stages>;

export function resetGameState(gamePipeline: ForwardGamePipeline) {
    gamePipeline.currentState.playState = undefined;
}
