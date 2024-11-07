// ❓ DESCRIPTION:
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
// If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).
//
// ✅ SOLUTION:

function upArray(arr){
    if (arr.some(item => item < 0 || item > 9) || arr.length === 0) return null;
    if (arr.every(item => item === 9)) arr.unshift(0);
    for (let i = 1; i <= arr.length; i++) {
        let lastIndx = arr.length - i;
        if (arr[lastIndx] < 9) {
            arr[lastIndx] = arr[lastIndx] + 1;
            return arr;
        } else {
            arr[lastIndx] = 0;
        }
    }
}

// 📌 TESTCASE:
console.log(upArray([4,3,2,5])) // [4,3,2,6]
console.log(upArray([2,3,9,9])) // [2,4,0,0]
console.log(upArray(    [9,9])) //   [1,0,0]
console.log(upArray(    [0,7])) //     [0,8]
console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0])) // [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]
console.log(upArray([1,-9])) // null
console.log(upArray([1,10])) // null
console.log(upArray([])) // null
