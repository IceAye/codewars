// ❓ DESCRIPTION:
// Task
// Provided is a function Kata which accepts two parameters in the following order:
// array, element and returns the index of the element if found and "Not found" otherwise.
// Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata.
// (no more than 161) You may assume that all array elements are unique.
//
// ✅ SOLUTION:
function find(array, element) {
    return array.includes(element) ? array.indexOf(element) :  "Not found"
}

console.log(find(array, 5))
console.log(find(array, 11))