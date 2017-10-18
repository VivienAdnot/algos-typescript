//Design an algorithm to print all permutations of a string. For simplicity, assume all characters are unique.

let mergeCounter = 0;

export function permuteString(source: string) {
    if(!source) {
        throw "provide a valid non-empty string please";
    }

    if (source.length == 1) {
        console.log(source);
    }

    let subArray = source.split('');
    let newCharacter = subArray.pop();
    console.log("end merge", merge(newCharacter!, subArray.join('')));
}

export function merge(character: string, source: string): string[] {
    mergeCounter++;

    if (mergeCounter == 5) {
        throw "stop: mergeCounter";
    }

    console.log("start merge", mergeCounter, character, source);
    let sourceArray: string[] = source.split('');

    let combinations: string[];
    if (sourceArray.length > 1) {
        let newCharacter = sourceArray.pop();
        
        let subsetArray = sourceArray.join('');
        combinations = merge(newCharacter!, subsetArray);
    }
    else {
        console.log("stop digging", sourceArray);
        combinations = sourceArray;
    }
    
    let result: string[] = [];

    console.log("combinations", character, combinations);

    if (character == "r") {
        for(let combination of combinations) {
            console.log("start working with combination", combination);
            let combinationArray = combination.split('');
            console.log("combinationArray", combinationArray);

            for(let combinationArrayIndex = 0; combinationArrayIndex < combinationArray.length; combinationArrayIndex++) {
                let copy = combinationArray.join().split('');
                copy.splice(combinationArrayIndex, 0, character!);
                let copyText = copy.join('');
                console.log("push", copyText);
                result.push(copyText);
            }
        }
    }

    return result;
}