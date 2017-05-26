interface Pet {
    name: string;
    age: number;
    weight: number;
}

var myPets: Pet[] = [
    { name: 'Sally', age: 18, weight: 85 },
    { name: 'Jasmine', age: 9, weight: 55 },
    { name: 'Rush', age: 15, weight: 45 },
    { name: 'Roxie', age: 6, weight: 85 }    
];

var compareAge = function(a: Pet, b: Pet) {
    if (a.age > b.age) { return -1; }
    if (a.age < b.age) {return 1; }
    return 0;
}

console.log(myPets.sort(compareAge));