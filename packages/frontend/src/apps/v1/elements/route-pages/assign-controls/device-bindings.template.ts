import {css, html, listen} from 'element-vir';
import {TemplateResult} from 'lit';
import {BasicInputDevice} from '../../../data/basic-input-device';
import {DeviceBindingMap} from '../../../data/settings/game-settings-type';
import {
    AvailableControls,
    Binding,
    blankBindings,
} from '../../../data/settings/input-binding-settings';

export const deviceBindingsStyles = css`
    .individual-binding-wrapper {
        display: flex;
        flex-direction: column;
        padding: 8px;
        border: 2px solid #ccc;
        width: 75px;
        height: 40px;
        align-items: center;
        border-radius: 4px;
        gap: 4px;
        cursor: pointer;
    }

    .control-name {
        text-decoration: underline;
    }

    .individual-binding-wrapper.selected {
        border-color: dodgerblue;
        opacity: 1;
    }

    .binding-row {
        display: flex;
        justify-content: space-between;
    }

    .binding-row.single {
        justify-content: center;
    }

    .bindings-wrapper {
        width: 300px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        user-select: none;
        -webkit-user-select: none;
    }
`;

export function getDeviceBindingsTemplate({
    currentDevice,
    allBindings,
    currentlySelected,
    selectedCallback,
}: {
    currentDevice: BasicInputDevice;
    allBindings: DeviceBindingMap;
    currentlySelected: AvailableControls | undefined;
    selectedCallback: (control: AvailableControls) => void;
}): TemplateResult {
    const currentBindings = allBindings[currentDevice.deviceName]?.bindings ?? blankBindings;
    const inputObjectBase = {
        currentlySelected,
        selectedCallback,
    } as const;

    return html`
        <div class="bindings-wrapper">
            <div class="binding-row single">
                ${getBindingInput({
                    ...inputObjectBase,
                    control: AvailableControls.Up,
                    binding: currentBindings[AvailableControls.Up],
                })}
            </div>
            <div class="binding-row">
                ${getBindingInput({
                    ...inputObjectBase,
                    control: AvailableControls.Left,
                    binding: currentBindings[AvailableControls.Left],
                })}
                ${getBindingInput({
                    ...inputObjectBase,
                    control: AvailableControls.Right,
                    binding: currentBindings[AvailableControls.Right],
                })}
            </div>
            <div class="binding-row single">
                ${getBindingInput({
                    ...inputObjectBase,
                    control: AvailableControls.Down,
                    binding: currentBindings[AvailableControls.Down],
                })}
            </div>
            <div class="binding-row single">
                ${getBindingInput({
                    ...inputObjectBase,
                    control: AvailableControls.Pause,
                    binding: currentBindings[AvailableControls.Pause],
                })}
            </div>
        </div>
    `;
}

function getBindingInput({
    control,
    binding,
    currentlySelected,
    selectedCallback,
}: {
    control: AvailableControls;
    binding: Binding;
    currentlySelected: AvailableControls | undefined;
    selectedCallback: (control: AvailableControls) => void;
}): TemplateResult {
    const boundNameToDisplay = binding.inputName === '' ? 'N/A' : binding.inputName;

    return html`
        <div
            class="individual-binding-wrapper ${currentlySelected
                ? 'blocked'
                : ''} ${currentlySelected === control ? 'selected' : ''}"
            ${listen('click', () => {
                selectedCallback(control);
            })}
        >
            <span class="control-name">${control}</span>
            <span class="bound-name">${boundNameToDisplay}</span>
        </div>
    `;
}
