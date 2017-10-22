export function areAnagrams(str1: string, str2: string) {
    if (str1.length != str2.length) return false;

    let uniqueCharacters = 0;
    let letters: number[] = []; //ascii table, 256 max length

    for (let i = 0; i < str1.length; i++) {
        let charCode = str1.charCodeAt(i);
        if (!letters[charCode]) {
            uniqueCharacters++;
            letters[charCode] = 0;
        }
        letters[charCode]++;
    }

    let charactersCompleted = 0;

    for (let i = 0; i < str2.length; i++) {
        let charCode = str1.charCodeAt(i);
        
        // found more of this character in str2 than in str1
        if (!letters[charCode] || letters[charCode] == 0) {
            return false;
        }

        letters[charCode]--;

        if (letters[charCode] == 0) {
            charactersCompleted++;

            if (charactersCompleted == uniqueCharacters) {
                return i == (str2.length - 1);
            }
        }
    }

    return false;
}

export function test_areAnagrams() {
    let tests = [
        {a: "vivien", b:"bruno"},
        {a: "vivien", b:"vienvi"},
        {a: "vivien", b:"nevivi"},
        {a: "bruno", b:"bourn"},
        {a: "zanzibar", b:"zibarzan"},
        {a: "bob", b:"obbo"}
    ];

    for (let test of tests) {
        console.log(test.a, test.b, areAnagrams(test.a, test.b));
    }
}