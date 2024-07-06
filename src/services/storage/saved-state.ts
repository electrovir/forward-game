import {Overwrite} from '@augment-vir/common';
import {
    ActionBinding,
    ActionsBindingsMap,
    InputDirection,
    PlayersActionsBindingsMap,
} from '@game-vir/handle-input';
import {InputDeviceKey} from 'input-device-handler';
import {defineShape, enumShape, indexedKeys, or} from 'object-shape-tester';
import {GameAction} from '../game-pipeline/state/actions';

/** Shape for {@link ActionBinding} */
const actionBindingShape = defineShape({
    deviceKey: enumShape(InputDeviceKey),
    inputName: '',
    direction: enumShape(InputDirection),
});

/** Shape for {@link ActionsBindingsMap} */
const actionsBindingsMapShape = defineShape(
    indexedKeys({
        keys: enumShape(GameAction),
        values: [actionBindingShape],
        required: true,
    }),
);

/** Shape for {@link PlayersActionsBindingsMap} */
const playersActionsBindingsMapShape = defineShape(
    indexedKeys({
        keys: '' as `${number}`,
        values: actionsBindingsMapShape,
        required: false,
    }),
);

export const savedStateShape = defineShape({
    bindings: or(playersActionsBindingsMapShape, undefined),
    playerCount: or(1, undefined),
});

export type SavedState = Partial<
    Overwrite<typeof savedStateShape.runTimeType, {bindings: PlayersActionsBindingsMap}>
>;
