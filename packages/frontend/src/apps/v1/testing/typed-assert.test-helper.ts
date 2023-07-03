import {assert} from '@open-wc/testing';

export function typedAssertInstanceOf<InstanceOfGeneric>(
    valueToCheck: unknown,
    constructor: new () => InstanceOfGeneric,
    message = '',
): asserts valueToCheck is InstanceOfGeneric {
    assert.instanceOf(valueToCheck, constructor, message);
}

export function assertNotNullish<T>(
    valueToCheck: T,
    message = '',
): asserts valueToCheck is NonNullable<T> {
    assert.isNotNull(valueToCheck, message);
    assert.isDefined(valueToCheck, message);
}
