export function mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    const array: number[] = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex + rightIndex < left.length + right.length) {
        const leftItem = left[leftIndex];
        const righItem = right[rightIndex];

        if(leftItem == null) {
            array.push(righItem);
            rightIndex++;
        }
        else if (righItem == null) {
            array.push(leftItem);
            leftIndex++;
        }
        else if (leftItem < righItem) {
            array.push(leftItem);
            leftIndex++;
        }
        else {
            array.push(righItem);
            rightIndex++;
        }
    }

    console.log(left, right, array);
    return array;
}