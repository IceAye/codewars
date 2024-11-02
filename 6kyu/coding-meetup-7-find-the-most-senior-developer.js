// ❓ DESCRIPTION:
// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.
//
// ✅ SOLUTION 1:
function findSenior(list) {
    return list.sort((a, b) => a.age - b.age).filter(item => item.age === list.at(-1).age)
}

// ✅ SOLUTION 2:
function findSenior(list) {
    return list.filter(person => person.age === Math.max(...list.map(person => person.age)));
}

let list1 = [
    {
        firstName: "Gabriel",
        lastName: "X.",
        country: "Monaco",
        continent: "Europe",
        age: 49,
        language: "PHP",
    },
    {
        firstName: "Odval",
        lastName: "F.",
        country: "Mongolia",
        continent: "Asia",
        age: 38,
        language: "Python",
    },
    {
        firstName: "Emilija",
        lastName: "S.",
        country: "Lithuania",
        continent: "Europe",
        age: 19,
        language: "Python",
    },
    {
        firstName: "Sou",
        lastName: "B.",
        country: "Japan",
        continent: "Asia",
        age: 49,
        language: "PHP",
    },
];

let list2 = [
    {
        firstName: "Gabriel",
        lastName: "X.",
        country: "Monaco",
        continent: "Europe",
        age: 49,
        language: "PHP",
    },
    {
        firstName: "Odval",
        lastName: "F.",
        country: "Mongolia",
        continent: "Asia",
        age: 38,
        language: "Python",
    },
    {
        firstName: "Emilija",
        lastName: "S.",
        country: "Lithuania",
        continent: "Europe",
        age: 19,
        language: "Python",
    },
];

let list3 = [
    {
        firstName: "Alexander",
        lastName: "F.",
        country: "Russia",
        continent: "Europe",
        age: 89,
        language: "Java",
    },
    {
        firstName: "Fatima",
        lastName: "K.",
        country: "Saudi Arabia",
        continent: "Asia",
        age: 21,
        language: "Clojure",
    },
    {
        firstName: "Mark",
        lastName: "G.",
        country: "Scotland",
        continent: "Europe",
        age: 22,
        language: "JavaScript",
    },
    {
        firstName: "Nikola",
        lastName: "H.",
        country: "Serbia",
        continent: "Europe",
        age: 29,
        language: "Python",
    },
    {
        firstName: "Jakub",
        lastName: "I.",
        country: "Slovakia",
        continent: "Europe",
        age: 28,
        language: "Java",
    },
    {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 89,
        language: "JavaScript",
    },
    {
        firstName: "Luka",
        lastName: "J.",
        country: "Slovenia",
        continent: "Europe",
        age: 29,
        language: "Clojure",
    },
    {
        firstName: "Mariam",
        lastName: "B.",
        country: "Egypt",
        continent: "Africa",
        age: 89,
        language: "Python",
    },
];

// 📌 TESTCASE:
console.log(findSenior(list1)); //  [{ firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe',
// age: 49, language: 'PHP' },{ firstName: 'Sou', lastName: 'B.', country: 'Japan',
// continent: 'Asia', age: 49, language: 'PHP' }]

console.log(findSenior(list2)); // [{ firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age:
// 49, language: 'PHP' }]

console.log(findSenior(list3)); // [{ firstName: 'Alexander', lastName: 'F.', country: 'Russia', continent: 'Europe',
// age: 89, language: 'Java' }, { firstName: 'Kseniya', lastName: 'T.', country:
// 'Belarus', continent: 'Europe', age: 89, language: 'JavaScript' }, { firstName:
// 'Mariam', lastName: 'B.', country: 'Egypt', continent: 'Africa', age: 89, language:
// 'Python' }]
