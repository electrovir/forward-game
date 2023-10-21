import {GamePipeline} from 'game-vir';
import {defaultGameStateForReadingInputs, readInputs} from './game-modules/read-inputs.game-module';

export function createForwardGamePipeline() {
    return new GamePipeline([readInputs], {
        ...defaultGameStateForReadingInputs,
    });
}
