import {BookEntry} from 'element-book';
import {assignControlsV1Page} from '../../../v1/elements/assign-controls/vir-assign-controls-v1.element.book';
import {actionBindingsV1Page} from '../../../v1/elements/assign-controls/vir-bindings-table-v1.element.book';
import {glowAnimationPage} from '../../../v1/elements/assign-controls/vir-glow-animation-v1.element.book';
import {elementsPage} from './top-level-book-element-entries';

export const elementBookEntries: ReadonlyArray<BookEntry> = [
    elementsPage,

    assignControlsV1Page,
    glowAnimationPage,
    actionBindingsV1Page,
].sort((a, b) => a.title.localeCompare(b.title));
