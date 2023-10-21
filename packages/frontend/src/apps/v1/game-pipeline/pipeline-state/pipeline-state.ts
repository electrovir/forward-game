import {GameStateForMappingInputs} from '../game-modules/map-inputs-to-actions.game-module';
import {
    ExecutionContextForReadingInputs,
    GameStateForReadingInputs,
} from '../game-modules/read-inputs.game-module';

export type ForwardGameState = GameStateForReadingInputs & GameStateForMappingInputs;

export type ForwardGameExecutionContext = ExecutionContextForReadingInputs;
