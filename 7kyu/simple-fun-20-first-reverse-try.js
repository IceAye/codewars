// ❓ DESCRIPTION:
// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.
// Given an array arr, swap its first and last elements and return the resulting array.
//
// Example
// For arr = [1, 2, 3, 4, 5], the output should be [5, 2, 3, 4, 1]
// Input/Output
// [input] integer array arr
// Constraints: 0 ≤ arr.length ≤ 50,  -1000 ≤ arr[i] ≤ 1000
// [output] an integer array
// Array arr with its first and its last elements swapped.
//
// ✅ SOLUTION:
function firstReverseTry(arr) {
    if (arr.length === 0) return [];
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
}

// 📌 TESTCASE:
console.log( firstReverseTry([1,2,3,4,5]) , [5,2,3,4,1])
console.log( firstReverseTry([]) , [])
console.log( firstReverseTry([111]) , [111])
console.log( firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]) , [324, 54, 12, 3, 4, 56, 23, 12, 5, 23])
console.log( firstReverseTry([-1,1]) , [1,-1])