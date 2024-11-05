function findOddNames(list) {
    return list.filter(person => [...person.firstName].reduce((acc, char) => {
        acc += char.charCodeAt(0);
        return acc
    }, 0) % 2 === 1);
}

let list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

let list2 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
];

console.log(findOddNames(list1)) // [{ firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }]
console.log(findOddNames(list2)) // []