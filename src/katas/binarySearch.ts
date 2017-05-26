export function binarySearch(array: number[], element: number, startIndex = 0, endIndex = array.length - 1): number {
    console.group(startIndex.toString());
    console.log(`start binarySearch start ${startIndex} end ${endIndex}`);

    if (endIndex < startIndex) {
        console.log(`end ${endIndex} < start ${startIndex}"`)
        return -1;
    }

    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    console.log(`middleIndex = ${middleIndex}`)

    if(element === array[middleIndex]) {
        console.log(`return middle ${middleIndex}`);
        return middleIndex;
    }
    else {
        if (element < array[middleIndex]) {
            console.log(`element ${element} < array[middle] ${array[middleIndex]}`);
            return binarySearch(array, element, startIndex, middleIndex - 1);
        }
        else {
            console.log(`element ${element} >= array[middle] ${array[middleIndex]}`);
            return binarySearch(array, element, middleIndex + 1, endIndex);
        }
    }
}