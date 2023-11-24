import {AnyInputDeviceKey} from 'input-device-handler';
import {createForwardGamePipeline} from './forward-game-pipeline';
import {BindingDirectionEnum} from './game-modules/map-to-actions.module';

describe('forwardGamePipeline', () => {
    it('catches invalid updates', () => {
        const testPipeline = createForwardGamePipeline({startImmediately: false});
        const deviceKey: AnyInputDeviceKey = 'keyboard' as AnyInputDeviceKey;

        testPipeline.update({
            stateUpdate: {
                saveNextFrame: true,
                // @ts-expect-error
                actionBindings: {
                    [deviceKey]: {
                        'button-b': {
                            [BindingDirectionEnum.Negative]: 'derp',
                        },
                    },
                },
            },
        });
    });
});
