export function generateRandomArray(length: number, maximumValue?: number): number[] {
    let result = [];
    maximumValue = maximumValue || 50;

    for(let i = 0; i < length; i ++) {
        result.push(generateRandomNumber(maximumValue));
    }

    return result;
}

export function generateRandomNumber(maximumValue: number): number {
    return Math.floor(Math.random() * maximumValue);
}