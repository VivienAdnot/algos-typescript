//Design an algorithm to print all permutations of a string. For simplicity, assume all characters are unique.

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
    console.log("start merge", character, source);
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

    for(let combination of combinations) {
        console.log("start working with combination", combination);
        let combinationArray = combination.split('');

        for(let i = 0; i < combinationArray.length; i++) {
            combinationArray.splice(i, 0, character!);
            let r = combinationArray.join('');
            console.log("push", r);
            result.push(r);
        }
    }

    return result;
}