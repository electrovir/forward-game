import {getObjectTypedKeys, isTruthy} from '@augment-vir/common';
import {classMap, css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {viraAnimationDurations} from 'vira';
import {DevicesToActionNameBindings} from '../../../game-pipeline/game-modules/map-to-actions.module';
import {ActionBinding, VirSingleBindingV1, minBindingHeight} from './vir-single-binding-v1.element';

export type ActionToBindings = {
    [actionName: string]: ActionBinding[];
};

type CurrentAssignments = Readonly<{
    requiredActionNames: ReadonlyArray<string>;
    bindings: Readonly<DevicesToActionNameBindings>;
}>;

function currentActionToBindings({
    requiredActionNames,
    bindings,
}: CurrentAssignments): Partial<ActionToBindings> {
    const actionToBindings: ActionToBindings = Object.fromEntries(
        requiredActionNames.map((actionName) => [
            actionName,
            [],
        ]),
    );

    getObjectTypedKeys(bindings).forEach((deviceKey) => {
        const deviceBindings = bindings[deviceKey];
        if (!deviceBindings) {
            return;
        }

        Object.keys(deviceBindings).forEach((inputName) => {
            const inputBindings = deviceBindings[inputName];
            if (!inputBindings) {
                return;
            }

            getObjectTypedKeys(inputBindings).forEach((direction) => {
                try {
                    const boundActionNames = inputBindings[direction];
                    if (!boundActionNames) {
                        return;
                    }
                    boundActionNames.forEach((boundActionName) => {
                        const actionNameBindings = actionToBindings[boundActionName];
                        if (actionNameBindings) {
                            actionNameBindings.push({deviceKey, direction, inputName});
                        }
                    });
                } catch (error) {
                    debugger;
                    throw error;
                }
            });
        });
    });

    return actionToBindings;
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
        removeBinding: defineElementEvent<ActionBinding & {actionName: string}>(),
        listenForAction: defineElementEvent<{actionName: string}>(),
    },
    renderCallback({inputs, dispatch, events}) {
        const actionMap = currentActionToBindings(inputs);

        const rows = inputs.requiredActionNames.map((actionName) => {
            const assignments = [
                ...(actionMap[actionName] || []).filter(isTruthy),
                undefined,
            ].map(
                (assignment) => html`
                    <${VirSingleBindingV1.assign({
                        binding: assignment,
                    })}
                        class=${classMap({'add-binding': !assignment})}
                        ${listen('click', () => {
                            if (assignment) {
                                dispatch(
                                    new events.removeBinding({
                                        actionName,
                                        ...assignment,
                                    }),
                                );
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
