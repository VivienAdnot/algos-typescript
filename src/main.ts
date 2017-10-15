import { binarySearch} from "./algorithms/binarySearch";
import { generateRandomArray } from "./_utils/random"
import { generateRandomNumber } from "./_utils/random"

let length = 5;
let array = generateRandomArray(length);
console.log(array.join());

let search = array[generateRandomNumber(length)];

console.log("searching for: " + search);

let result = binarySearch(array, search);

console.log("==================");
console.log(result);