/* description: remove the duplicate characters in a string without using any additional buffer.
Write the test cases for this method.*/

export function removeDuplicates(tested: string) {
    if (!tested || tested.length < 2) return tested;

    let testedArray = tested.split('');
    let tail = 1;

    for (let i = 1; i < testedArray.length; ++i) {
        let j: number;

        for (j = 0; j < tail; ++j) {
            if (testedArray[j] == testedArray[i]) {
                break;
            }
        }

        if (j == tail) {
            testedArray[tail] = testedArray[i];
            ++tail;
        }
    }

    return testedArray.slice(0, tail).join('');
}

export function test_removeDuplicates() {
    console.log("a", removeDuplicates("a"));
    console.log("aa", removeDuplicates("aa"));
    console.log("viv", removeDuplicates("viv"));
    console.log("vivien", removeDuplicates("vivien"));
    console.log("vivieei", removeDuplicates("vivieei"));
    console.log("aaabbb", removeDuplicates("aaabbb"));
}