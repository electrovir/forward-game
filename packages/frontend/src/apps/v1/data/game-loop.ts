import {LoopHandler} from './loop-handler';

export class GameLoopHandler extends LoopHandler<void, void> {
    constructor() {
        super();
        this.startGameLoop();
    }

    public override addLoopTrigger(): string {
        throw new Error(
            `${this.constructor.name} handles its own triggers: don't call addLoopTrigger to it.`,
        );
    }

    private runGameLoop(timestamp: number) {
        this.fireLoopCallbacks(timestamp, undefined);

        requestAnimationFrame((timestamp) => {
            this.runGameLoop(timestamp);
        });
    }

    protected generateCallbackInput(): void {
        return;
    }

    private startGameLoop() {
        this.runGameLoop(performance.now());
    }
}
