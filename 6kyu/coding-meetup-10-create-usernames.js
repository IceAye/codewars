function addUsername(list) {
    list.map((person) => person.username = person.firstName.toLowerCase() + person.lastName[0].toLowerCase() + (new Date().getFullYear() - person.age));
    return list;
}

let list1 = [
    {firstName: 'Emily' , lastName: 'N.' , country: 'Ireland' , continent: 'Europe' , age: 30 , language: 'Ruby'} ,
    {firstName: 'Nor' , lastName: 'E.' , country: 'Malaysia' , continent: 'Asia' , age: 20 , language: 'Clojure'}
];

//

console.log(addUsername(list1)) // [{ firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age:
                                // 30, language: 'Ruby', username: 'emilyn1990' },{ firstName: 'Nor', lastName: 'E.',
                                // country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', username:
                                // 'nore2000' }]