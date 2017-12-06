let values = [1, 2, 3, 4, 5];

export function test_recursive() {
    console.log(next(values.shift()!));
};

function next(value: number): number {
    if (!values.length) {
        return value * 10;
    } else {
        return next(values.shift()!);
    }
}