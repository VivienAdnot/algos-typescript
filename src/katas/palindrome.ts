/* ok: radar, too, madam */
/* not ok: bazar */

export function isPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return reversed === str;
}

/*function isAnyPermutationPalindrome(str: string): boolean {
    return permutations(str).some(isPalindrome);
}*/
