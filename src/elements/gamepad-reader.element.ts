import {defineElementEvent, defineElementNoInputs, html} from 'element-vir';
import {GamepadMapping} from '../data/gamepad/gamepad';
import {startGamepadReadingLoopIfSupported} from '../data/gamepad/gamepad-loop';
import {
    areGamepadMappingsEqual,
    newGamepadsWereConnected,
    SerializedGamepadMapping,
    serializeGamepadMapping,
} from '../data/gamepad/serialized-gamepad';

export const VirGamepadReader = defineElementNoInputs({
    tagName: 'vir-gamepad-reader',
    stateInit: {
        gamepads: {} as GamepadMapping,
        serializedGamepads: {} as SerializedGamepadMapping,
        lastPosting: 0,
    },
    events: {
        gamepadChange: defineElementEvent<GamepadMapping>(),
    },
    initCallback: ({state, updateState, dispatch, events}) => {
        startGamepadReadingLoopIfSupported(undefined, (newGamepads) => {
            const serializedNewGamepads = serializeGamepadMapping(newGamepads);
            let shouldUpdate = false;

            if (newGamepadsWereConnected(state.serializedGamepads, serializedNewGamepads)) {
                console.info('Gamepad assignments changed', newGamepads);
                shouldUpdate = true;
            } else if (!areGamepadMappingsEqual(state.serializedGamepads, serializedNewGamepads)) {
                shouldUpdate = true;
            }

            if (shouldUpdate) {
                updateState({
                    gamepads: newGamepads,
                    serializedGamepads: serializedNewGamepads,
                });
                dispatch(new events.gamepadChange(newGamepads));
            }
        });
    },
    renderCallback: () => {
        return html``;
    },
});
