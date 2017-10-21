export function hasAllUniqueCharacters(tested: string): boolean {
    let testedArray = tested.split('');
    let asciiTable = [];

    for(let index = 0; index < testedArray.length; index++) {
        let asciiIndex = tested.charCodeAt(index);
        if (asciiTable[asciiIndex]) {
            return false;
        }
        asciiTable[asciiIndex] = true;
    }

    return true;
}

export function test_hasAllUniqueCharacters() {
    let letters = " !#$%&'()*+-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVXYZ[\]^_`abcdefgijklmnopqrstuvxwz{|}~";
    
    function getRandomLetter(): string {
        let randomIndex = Math.round(Math.random() * letters.length - 1);
        return letters[randomIndex];
    }
    
    let wordBuilder = [];
    for (let i = 0; i < 12; i++) {
        let randomLetter = getRandomLetter();
        wordBuilder.push(randomLetter);
    }
    
    let word = wordBuilder.join('');
    console.log("word", word, word.length);
    console.time();
    console.log("is word unique ?", hasAllUniqueCharacters(word));
    console.timeEnd();
}