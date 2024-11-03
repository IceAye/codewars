// ❓ DESCRIPTION:
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return:
// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
//
// ✅ SOLUTION:
function isAgeDiverse(list) {
    if (list.length < 10) return false;
    return list.reduce((acc, curr) => {
        if (curr.age >= 10 && curr.age < 20) acc[0] = curr.age;
        if (curr.age >= 20 && curr.age < 30) acc[1] = curr.age;
        if (curr.age >= 30 && curr.age < 40) acc[2] = curr.age;
        if (curr.age >= 40 && curr.age < 50) acc[3] = curr.age;
        if (curr.age >= 50 && curr.age < 60) acc[4] = curr.age;
        if (curr.age >= 60 && curr.age < 70) acc[5] = curr.age;
        if (curr.age >= 70 && curr.age < 80) acc[6] = curr.age;
        if (curr.age >= 80 && curr.age < 90) acc[7] = curr.age;
        if (curr.age >= 90 && curr.age < 100) acc[8] = curr.age;
        if (curr.age >= 100) acc[9] = curr.age;
        return acc;
    }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).every(el => el !== 0);
}

// 📌 TESTCASE:
const list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' },
];

const list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

const list3 = [
    { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
    { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
];

console.log(isAgeDiverse(list1)) // true
console.log(isAgeDiverse(list2)) // false
console.log(isAgeDiverse(list3)) // false