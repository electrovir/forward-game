import {BookEntry} from 'element-book';
import {assignControlsPage} from '../../../v1/elements/route-pages/assign-controls/vir-assign-controls-v1.element.book';
import {actionBindingsV1Page} from '../../../v1/elements/route-pages/assign-controls/vir-bindings-table-v1.element.book';
import {glowAnimationPage} from '../../../v1/elements/route-pages/assign-controls/vir-glow-animation.element.book';
import {elementsPage} from './top-level-book-element-entries';

export const elementBookEntries: ReadonlyArray<BookEntry> = [
    elementsPage,

    assignControlsPage,
    glowAnimationPage,
    actionBindingsV1Page,
].sort((a, b) => a.title.localeCompare(b.title));
