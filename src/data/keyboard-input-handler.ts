export class KeyboardInputHandler {
    /**
     * The event.key key name is stored here in lowercase. So if the "F" key is pressed, the string
     * stored here will be "f".
     */
    public readonly currentlyPressedKeys = new Set<string>();

    constructor() {
        this.attachListeners();
    }

    public isKeyPressed(key: string): boolean {
        return this.currentlyPressedKeys.has(key);
    }

    public howManyKeysArePressed(): number {
        return this.currentlyPressedKeys.size;
    }

    private attachListeners(): void {
        window.addEventListener('keydown', (event) => {
            this.currentlyPressedKeys.add(event.key);
        });
        window.addEventListener('keyup', (event) => {
            this.currentlyPressedKeys.delete(event.key);
        });
    }
}
