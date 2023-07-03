import {randomString} from '@augment-vir/browser';

type LoopCallback<CallbackInput> = (input: CallbackInput, timestamp: number) => void;

type LoopCallbackDetails<CallbackInput> = {
    lastTimeFired: number;
    timeout?: number | undefined;
    callback: LoopCallback<CallbackInput>;
};

export abstract class LoopHandler<CallbackInput, TriggerInput> {
    protected shouldRunCallbacks = true;
    private loopCallbacks = new Map<string, LoopCallbackDetails<CallbackInput>>();

    /** Returns an id for the added callback which can later be used to remove the callback. */
    public addLoopCallback(
        loopCallback: LoopCallback<CallbackInput>,
        msBetweenExecutions?: number | undefined,
    ) {
        const loopCallbackId = randomString();
        const loopCallbackDetails: LoopCallbackDetails<CallbackInput> = {
            lastTimeFired: Date.now(),
            timeout: msBetweenExecutions,
            callback: loopCallback,
        };
        this.loopCallbacks.set(loopCallbackId, loopCallbackDetails);

        return loopCallbackId;
    }

    public removeLoopCallback(loopId: string): boolean {
        return this.loopCallbacks.delete(loopId);
    }

    public addLoopTrigger(triggerLoop: LoopHandler<TriggerInput, any>): string {
        return triggerLoop.addLoopCallback((input, timestamp) => {
            this.fireLoopCallbacks(timestamp, input);
        });
    }

    protected abstract generateCallbackInput(timestamp: number, input: TriggerInput): CallbackInput;

    protected fireLoopCallbacks(timestamp: number, input: TriggerInput) {
        // if we don't have any callbacks, there's no point in doing anything
        if (!this.loopCallbacks.size || !this.shouldRunCallbacks) {
            return;
        }

        const callbackInput = this.generateCallbackInput(timestamp, input);

        this.loopCallbacks.forEach((loopCallbackDetails) => {
            if (loopCallbackDetails.timeout) {
                const timestampDiff = timestamp - loopCallbackDetails.lastTimeFired;
                if (timestampDiff >= loopCallbackDetails.timeout) {
                    const overshootPastExpectedCall = timestampDiff - loopCallbackDetails.timeout;
                    loopCallbackDetails.lastTimeFired = timestamp - overshootPastExpectedCall;
                    loopCallbackDetails.callback(callbackInput, timestamp);
                }
            } else {
                loopCallbackDetails.callback(callbackInput, timestamp);
            }
        });
    }
}
