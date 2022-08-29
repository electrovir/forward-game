import {css, defineElement, html} from 'element-vir';

type GamePosition = {
    x: number;
    y: number;
    paused: boolean;
};

export const VirGame = defineElement<{}>()({
    tagName: 'vir-game',
    events: {},
    styles: css``,
    stateInit: {
        position: {
            x: 0,
            y: 0,
            paused: false,
        } as GamePosition,
    },
    initCallback: ({inputs, state, updateState, genericDispatch}) => {},
    renderCallback: ({state, updateState, inputs, dispatch, events}) => {
        return html`
            Game Will Be Here
        `;
    },
});
