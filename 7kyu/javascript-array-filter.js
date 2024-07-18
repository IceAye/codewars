// ❓ DESCRIPTION:
// JavaScript Arrays support a filter function (starting in JavaScript 1.6).
// Use the filter functionality to complete the function given.
//
// ✅ SOLUTION:
function getEvenNumbers(numbersArray){
    return numbersArray.filter(item => item % 2 === 0)
}

console.log(getEvenNumbers([1,2,3,6,8,10]))
console.log(getEvenNumbers([13,15]))