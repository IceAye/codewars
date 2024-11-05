// ❓ DESCRIPTION:
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Given the following input array write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:
// Preserve the order of the original list.
// Return an empty array [] if there is no developer with an "odd" name.
// The input array and first names will always be valid and formatted as in the example above.
//
// ✅ SOLUTION:
function findOddNames(list) {
    return list.filter(person => [...person.firstName].reduce((acc, char) => {
        acc += char.charCodeAt(0);
        return acc
    }, 0) % 2 === 1);
}

// 📌 TESTCASE:
let list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

let list2 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
];

console.log(findOddNames(list1)) // [{ firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }]
console.log(findOddNames(list2)) // []