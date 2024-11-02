// ❓ DESCRIPTION:
// You will be given an array of objects (associative arrays in PHP, table in COBOL, dictionaries in Python) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an object (associative array in PHP, table in COBOL, dictionary in Python) which includes the count of each coding language represented at the meetup.
//
// ✅ SOLUTION 1:
function countLanguages(list) {
    let map = new Map();
    list.map(item => map.set(item.language, map.get(item.language) + 1 || 1));
    return Object.fromEntries(map);
}

// ✅ SOLUTION 2 (with reducer):
function countLanguages(list) {
    return list.reduce((acc, curr) => {
        acc.hasOwnProperty(curr.language) ? acc[curr.language] += 1 : acc[curr.language] = 1;
        return acc;
    }, {})
}

// 📌 TESTCASE:
let list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

console.log(countLanguages(list1)) // { C: 2, JavaScript: 1, Ruby: 1 }