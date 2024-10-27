// ❓ DESCRIPTION:
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
//
// ✅ SOLUTION:
function min(arr, toReturn) {
    let min = Math.min(...arr);
    return toReturn === "value" ? min : arr.indexOf(min);
}

// 📌 TESTCASE:
console.log(min([1,2,3,4,5], 'value')) // 1
console.log(min([1,2,3,4,5], 'index')) // 0
console.log(min([500,250,750,5000,1000,230], 'value')) // 230
console.log(min([500,250,750,5000,1000,230], 'index')) // 5
console.log(min([750,50000,10,50], 'value')) // 10
console.log(min([750,50000,10,50], 'index')) // 2
