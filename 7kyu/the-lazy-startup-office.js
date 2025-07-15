// ❓ DESCRIPTION:
// A startup office has an ongoing problem with its bin. Due to low budgets, they don't hire cleaners. As a result, the staff are left to voluntarily empty the bin. It has emerged that a voluntary system is not working and the bin is often overflowing. One staff member has suggested creating a rota system based upon the staff seating plan.
// Create a function that accepts a 2D array of names. The function will return a single array containing staff names in the order that they should empty the bin.
// Adding to the problem, the office has some temporary staff. This means that the seating plan changes every month. Both staff members' names and the number of rows of seats may change. Ensure that the function works when tested with these changes.
//
// Notes:
// All the rows will always be the same length as each other.
// There will be no empty spaces in the seating plan.
// There will be no empty arrays.
// Each row will be at least one seat long.
//
// [ ["Stefan", "Raj",    "Marie"],
//   ["Alexa",  "Amy",    "Edward"],
//   ["Liz",    "Claire", "Juan"],
//   ["Dee",    "Luke",   "Katie"] ]
//
// As an output you would expect in this case:
// ["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"])

// ✅ SOLUTION:
function binRota(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        while (arr[i].length) {
            if (i % 2 === 0) {
                result.push(arr[i].shift());
            } else {
                result.push(arr[i].pop());
            }
        }
    }
    return result;
}

// 📌 TESTCASE:
console.log(binRota([["Bob","Nora"],["Ruby","Carl"]])) // ["Bob","Nora","Carl","Ruby"]
console.log(binRota([["Billy"]])) // ["Billy"]
console.log(binRota([["Billy", "Nancy"]])) // ["Billy","Nancy"]
console.log(binRota([["Billy"],["Megan"],["Aki"],["Arun"],["Joy"]])) // ["Billy", "Megan", "Aki", "Arun","Joy"]
console.log(binRota([["Sam","Nina","Tim","Helen","Gurpreet","Edward","Holly","Eliza"],["Billy","Megan","Aki","Arun","Joy","Anish","Lee","Maryan"],["Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"]])) // ["Sam","Nina","Tim","Helen", "Gurpreet", "Edward", "Holly", "Eliza","Maryan","Lee","Anish","Joy","Arun","Aki","Megan","Billy","Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"]
console.log(binRota([["Stefan","Raj","Marie"],["Alexa","Amy","Edward"],["Liz","Claire","Juan"],["Dee","Luke","Elle"]])) // ["Stefan","Raj","Marie","Edward","Amy","Alexa","Liz","Claire","Juan","Elle","Luke","Dee"]