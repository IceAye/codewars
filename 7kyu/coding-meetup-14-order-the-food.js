// ❓ DESCRIPTION:
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form.
//
// ✅ SOLUTION:

function orderFood(list) {
    return list.reduce((acc, curr) => {
        acc[curr.meal] >= 1 ? acc[curr.meal]++ : acc[curr.meal] = 1;
        return acc;
    }, {});
}

// 📌 TESTCASE:
let list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
        meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
        meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
        meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
        meal: 'vegetarian' },
];

let list2 = [
    {"firstName":"Noah","lastName":"M.","country":"Switzerland","continent":"Europe","age":19,"language":"C","meal":"vegetarian"},
    {"firstName":"Anna","lastName":"R.","country":"Liechtenstein","continent":"Europe","age":52,"language":"JavaScript","meal":"standard"},
    {"firstName":"Ramona","lastName":"R.","country":"Paraguay","continent":"Americas","age":29,"language":"Ruby","meal":"vegan"},
    {"firstName":"George","lastName":"B.","country":"England","continent":"Europe","age":81,"language":"C","meal":"vegetarian"}
];

list3 = [
    {"firstName":"Noah","lastName":"M.","country":"Switzerland","continent":"Europe","age":19,"language":"C","meal":"vegetarian"},
    {"firstName":"Anna","lastName":"R.","country":"Liechtenstein","continent":"Europe","age":52,"language":"JavaScript","meal":"standard"},
    {"firstName":"Ramona","lastName":"R.","country":"Paraguay","continent":"Americas","age":29,"language":"Ruby","meal":"vegan"},
    {"firstName":"George","lastName":"B.","country":"England","continent":"Europe","age":81,"language":"C","meal":"standard"},
    {"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python","meal":"gluten-intolerant"},
    {"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript","meal":"standard"},
    {"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby","meal":"gluten-intolerant"},
    {"firstName":"Sofia","lastName":"I.","country":"Argentina","continent":"Americas","age":35,"language":"Java","meal":"diabetic"},
    {"firstName":"Nareh","lastName":"Q.","country":"Armenia","continent":"Europe","age":30,"language":"Clojure","meal":"standard"},
    {"firstName":"Daniel","lastName":"J.","country":"Aruba","continent":"Americas","age":42,"language":"JavaScript","meal":"standard"}
];

console.log(orderFood(list1)) // { vegetarian: 2, standard: 1, vegan: 1 }
console.log(orderFood(list2)) // { vegetarian: 2, standard: 1, vegan: 1 }
console.log(orderFood(list3)) // {vegetarian: 1, standard: 1,vegan: 1, gluten-intolerant: 2, diabetic: 1}