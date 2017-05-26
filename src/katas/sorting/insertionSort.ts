export function insertionSort(array: number[]): number[] {
    array = array.slice(); // creates a copy of the array

    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        var j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }

    return array;
}