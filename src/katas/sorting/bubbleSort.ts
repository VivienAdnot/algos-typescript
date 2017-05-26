export function bubbleSort(array: number[]): number[] {
    array = array.slice(); // creates a copy of the array

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1; j++) {

            if(array[j] > array[j + 1]) {
                let swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }

    return array;
}

export function idiomaticBubbleSort(array: number[]): number[] {
    array = array.slice(); // creates a copy of the array

    while (true) {
        let swapped = false;

        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
            //console.log(array);
        }

        if(!swapped) {
            break;
        }
    }

    console.log("end idiomatic bubbleSort");
    return array;
}