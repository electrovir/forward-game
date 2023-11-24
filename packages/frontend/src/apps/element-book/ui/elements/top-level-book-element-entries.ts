import {defineBookPageWithGlobals} from 'element-book';
import {ForwardGamePipeline} from '../../../v1/game-pipeline/forward-game-pipeline';

export const elementsPage = defineBookPageWithGlobals<{gamePipeline: ForwardGamePipeline}>()({
    parent: undefined,
    title: 'elements',
});
