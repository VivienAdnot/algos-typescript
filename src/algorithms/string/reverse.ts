export function reverse(tested: string) {
    let letters = tested.split("");
    letters.reverse();
    return letters.join('');
}

export function test_reverse() {
    console.log("reverse bruno", reverse("bruno"));
}