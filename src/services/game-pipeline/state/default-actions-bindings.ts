import {InputDirection, PlayersActionsBindingsMap} from '@game-vir/handle-input';
import {InputDeviceKey} from 'input-device-handler';
import {GameAction} from './actions';

export const defaultPlayersActionsBindingsMap: Readonly<PlayersActionsBindingsMap<GameAction>> = {
    '1': {
        [GameAction.Up]: [
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-ArrowUp',
            },
        ],
        [GameAction.Down]: [
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-ArrowDown',
            },
        ],
        [GameAction.Left]: [
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-ArrowLeft',
            },
        ],
        [GameAction.Right]: [
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-ArrowRight',
            },
        ],

        [GameAction.Enter]: [
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-Enter',
            },
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-NumpadEnter',
            },
        ],
        [GameAction.Exit]: [
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-Escape',
            },
        ],
        [GameAction.Pause]: [
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-Space',
            },
        ],
    },
    '2': {
        [GameAction.Up]: [
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-KeyW',
            },
        ],
        [GameAction.Down]: [
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-KeyS',
            },
        ],
        [GameAction.Left]: [
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-KeyA',
            },
        ],
        [GameAction.Right]: [
            {
                deviceKey: InputDeviceKey.Keyboard,
                direction: InputDirection.Positive,
                inputName: 'button-KeyD',
            },
        ],
    },
};
