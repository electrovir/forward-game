import {AnyInputDeviceKey, InputDeviceTypeEnum} from 'input-device-handler';
import {assertTypeOf} from 'run-time-assertions';
import {MergeDeep} from 'type-fest';
import {
    ForwardGameState,
    createForwardGamePipeline,
    startingGameStatePieces,
} from './forward-game-pipeline';
import {BindingDirectionEnum} from './game-modules/inputs/action-binding';

describe('forwardGamePipeline', () => {
    it('catches invalid updates', () => {
        const testPipeline = createForwardGamePipeline({startImmediately: false});
        const deviceKey: AnyInputDeviceKey = 'keyboard' as AnyInputDeviceKey;

        testPipeline.update({
            stateUpdate: {
                runTime: {
                    saveNextFrame: true,
                },
                settings: {
                    actionBindingGroups: {
                        myGroup: {
                            isDefault: false,
                            bindings: [
                                {
                                    actionName: 'derp',
                                    // @ts-expect-error: device key does not match device type.
                                    deviceKey: 0,
                                    deviceType: InputDeviceTypeEnum.Keyboard,
                                    direction: BindingDirectionEnum.Negative,
                                    inputName: 'button-b',
                                },
                            ],
                            name: 'my group',
                        },
                    },
                },
            },
        });
    });
});

describe('startingGameStatePieces', () => {
    it('includes all needed parts for the full game state', () => {
        type CombinedGameStatePieces = MergeDeep<
            (typeof startingGameStatePieces)[0],
            MergeDeep<(typeof startingGameStatePieces)[1], (typeof startingGameStatePieces)[2]>
        >;

        const gameState: ForwardGameState = {} as unknown as CombinedGameStatePieces;

        assertTypeOf<CombinedGameStatePieces>().toMatchTypeOf<ForwardGameState>();
    });
});
