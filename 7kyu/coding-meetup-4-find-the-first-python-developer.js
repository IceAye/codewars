// ❓ DESCRIPTION:
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.
// Your task is to return one of the following strings:
// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
//
// ✅ SOLUTION:
let list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

let list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

function getFirstPython(list) {
    let index = list.findIndex((developer) => developer.language === "Python");
    return index === -1
        ? "There will be no Python developers"
        : list[index].firstName + ", " + list[index].country;
}

// 📌 TESTCASE:
console.log(getFirstPython(list1)); // 'Victoria, Puerto Rico'
console.log(getFirstPython(list2)); // 'There will be no Python developers'
