export function hasAllUniqueCharacters(tested: string): boolean {
    let testedArray = tested.split('');
    let uniqueCharacters = [];

    for(let character of testedArray) {
        if (uniqueCharacters.indexOf(character) !== -1) {
            return false;
        }
        uniqueCharacters.push(character);
    }

    return true;
}

export function getASCII(source: string) {
    for (let index = 0; index < source.length; index++) {
        console.log(source[index], source.charCodeAt(index));
    }
}