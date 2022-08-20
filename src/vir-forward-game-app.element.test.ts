import {renderEmptyElement} from './testing/render-empty-element.test-helper';
import {VirForwardGameApp} from './vir-forward-game-app.element';

describe(VirForwardGameApp.tagName, () => {
    it('should create an element', async () => {
        const rendered = renderEmptyElement(VirForwardGameApp);
    });
});
