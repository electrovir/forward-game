import {AnyInputDeviceKey} from 'input-device-handler';
import {createForwardGamePipeline} from './forward-game-pipeline';
import {BindingDirectionEnum} from './game-modules/map-to-actions.module';

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
                    /** Cannot assign a string ('derp') here, it should be a string array. */
                    // @ts-expect-error
                    actionBindings: {
                        [deviceKey]: {
                            'button-b': {
                                [BindingDirectionEnum.Negative]: 'derp',
                            },
                        },
                    },
                },
            },
        });
    });
});
