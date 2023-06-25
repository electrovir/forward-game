export function animationFrameOrCustomTickRate(
    customTickRateMs: number | undefined,
    callback: () => void,
) {
    if (customTickRateMs) {
        setTimeout(callback, customTickRateMs);
    } else {
        requestAnimationFrame(callback);
    }
}
