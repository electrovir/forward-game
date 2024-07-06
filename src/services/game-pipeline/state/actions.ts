import {PropertyValueType} from '@augment-vir/common';
import {MenuNavAction} from '@game-vir/handle-input';

export const GameAction = {
    Pause: 'pause',
    ...MenuNavAction,
};
export type GameAction = PropertyValueType<typeof GameAction>;
