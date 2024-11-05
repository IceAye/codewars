function askForMissingDetails(list) {
    return list.reduce((acc, person) => {
        for (let value in person) {
            if (person[value] === null) {
                person = {
                    ...person,
                    question: `Hi, could you please provide your ${value}.`,
                };
                acc.push(person);
            }
        }
        return acc;
    }, []);
}

let list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

console.log(askForMissingDetails(list1))
// [{ firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//         question: 'Hi, could you please provide your firstName.' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
//         question: 'Hi, could you please provide your language.' }
// ];

let list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

console.log(askForMissingDetails(list2)) // []