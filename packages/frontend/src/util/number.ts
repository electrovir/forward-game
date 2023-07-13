export function round(inputs: {number: number; digits: number}): number {
    const digitFactor = Math.pow(10, inputs.digits);
    const multiplied = inputs.number * digitFactor;

    return Number((Math.round(multiplied) / digitFactor).toFixed(inputs.digits));
}
