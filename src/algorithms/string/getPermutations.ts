//Design an algorithm to print all permutations of a string. For simplicity, assume all characters are unique.

export function getPermutations(source: string) {
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

function merge(character: string, source: string): string[] {
    let sourceArray: string[] = source.split('');

    let combinations: string[];
    if (sourceArray.length > 1) {
        let newCharacter = sourceArray.pop();
        
        let subsetArray = sourceArray.join('');
        combinations = merge(newCharacter!, subsetArray);
    }
    else {
        combinations = sourceArray;
    }
    
    let result: string[] = [];

    console.log("combinations", character, combinations);

    for(let combination of combinations) {
        let combinationArray = combination.split('');

        for(let combinationArrayIndex = 0; combinationArrayIndex < combinationArray.length; combinationArrayIndex++) {
            let newArray = insertArray(combinationArray, combinationArrayIndex, character);
            let copyText = newArray.join('');
            result.push(copyText);
        }
        result.push(combination + character);
    }

    return result;
}

function insertArray(arr: string[], position: number, source: string) {
    let copy = arr.map(c => c);
    copy.splice(position, 0, source);

    return copy;
}