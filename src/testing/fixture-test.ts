import {fixtureCleanup} from '@open-wc/testing';
import {isPromiseLike} from 'augment-vir';

/**
 * This ensures that all fixtures created on the document within the callback are cleaned up after
 * the callback is finished running.
 */
export function fixtureIt(message: string, callback: () => Promise<void>) {
    return it(message, async () => {
        return await withFixtureCleanup(callback);
    });
}

export function withFixtureCleanup<T>(callback: () => T): T;
export function withFixtureCleanup<T>(callback: () => Promise<T>): Promise<T>;
export function withFixtureCleanup<T>(callback: () => Promise<T> | T): T | Promise<T> {
    const result = callback();
    if (isPromiseLike(result)) {
        return new Promise<T>(async (resolve, reject) => {
            try {
                const awaitedResult = await result;
                fixtureCleanup();
                resolve(awaitedResult);
            } catch (error) {
                reject(error);
            }
        });
    } else {
        fixtureCleanup();
        return result;
    }
}
