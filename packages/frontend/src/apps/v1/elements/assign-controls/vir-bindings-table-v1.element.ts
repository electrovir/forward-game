import {getOrSet, isTruthy} from '@augment-vir/common';
import {classMap, css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {viraAnimationDurations} from 'vira';
import {
    ActionBinding,
    ActionBindingGroup,
} from '../../game-pipeline/game-modules/inputs/action-binding';
import {VirSingleBindingV1, minBindingHeight} from './vir-single-binding-v1.element';

export type ActionNamesToBindings = {
    [actionName: string]: ActionBinding[];
};

type CurrentAssignments = Readonly<{
    bindingGroup: ActionBindingGroup;
    requiredActionNames: ReadonlyArray<string>;
    showBindingsForUnconnectedGamepads: boolean;
}>;

function currentActionToBindings({
    requiredActionNames,
    bindingGroup,
}: CurrentAssignments): Partial<ActionNamesToBindings> {
    const actionNamesToBindings: ActionNamesToBindings = Object.fromEntries(
        requiredActionNames.map((actionName) => [
            actionName,
            [],
        ]),
    );

    bindingGroup.bindings.forEach((binding) => {
        const bindingsForCurrentAction = getOrSet(
            actionNamesToBindings,
            binding.actionName,
            () => [],
        );
        bindingsForCurrentAction.push(binding);
    });

    return actionNamesToBindings;
}

export const VirBindingsTableV1 = defineElement<CurrentAssignments>()({
    tagName: 'vir-bindings-table-v1',
    styles: css`
        .assignment-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        table {
            max-width: 100%;
            width: 100%;
            border-collapse: collapse;
        }

        th {
            text-align: right;
            vertical-align: top;
            white-space: nowrap;
        }

        tr + tr td,
        tr + tr th {
            border-top: 1px solid #ccc;
        }

        td {
            width: 100%;
        }

        th,
        td {
            padding: 8px;
        }

        .action-name-wrapper {
            height: ${minBindingHeight}px;
            display: flex;
            align-items: center;
        }

        .add-binding {
            transition: ${viraAnimationDurations['vira-interaction-animation-duration'].value};
            opacity: 0.5;
        }

        .add-binding:hover {
            opacity: 1;
        }
    `,
    events: {
        removeBinding: defineElementEvent<ActionBinding>(),
        listenForAction: defineElementEvent<{actionName: string}>(),
    },
    renderCallback({inputs, dispatch, events}) {
        const actionMap = currentActionToBindings(inputs);

        const rows = inputs.requiredActionNames.map((actionName) => {
            const assignments = [
                undefined,
                ...(actionMap[actionName] || []).filter(isTruthy),
            ].map(
                (assignment) => html`
                    <${VirSingleBindingV1.assign({
                        actionBinding: assignment,
                    })}
                        class=${classMap({'add-binding': !assignment})}
                        ${listen('click', () => {
                            if (assignment) {
                                dispatch(new events.removeBinding(assignment));
                            } else {
                                dispatch(
                                    new events.listenForAction({
                                        actionName,
                                    }),
                                );
                            }
                        })}
                    ></${VirSingleBindingV1}>
                `,
            );

            return html`
                <tr class="action-assignment-row">
                    <th>
                        <div class="action-name-wrapper"><span>${actionName}</span></div>
                    </th>
                    <td><div class="assignment-buttons">${assignments}</div></td>
                </tr>
            `;
        });

        return html`
            <table>
                <tbody>${rows}</tbody>
            </table>
        `;
    },
});
