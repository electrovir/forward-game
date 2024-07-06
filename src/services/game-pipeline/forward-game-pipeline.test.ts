import {createForwardGamePipeline} from './forward-game-pipeline';

describe('ForwardGamePipeline', () => {
    it('can listen to winning players', async () => {
        const gamePipeline = await createForwardGamePipeline();

        gamePipeline.listenToState(
            true,
            {
                playState: {
                    winningPlayers: true,
                },
            },
            () => {},
        );
    });
});
