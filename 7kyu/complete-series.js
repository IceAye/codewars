// ❓ DESCRIPTION:
// You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.
//
// If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0. like this:
//
// inputs        outputs
// [2,1]     ->  [0,1,2]
// [1,4,4,6] ->  [0]
// Notes: all numbers are positive integers.
//
// ✅ SOLUTION:
function completeSeries(arr) {
    if (arr.length !== new Set(arr).size) return [0];
    const max = Math.max(...arr);
    return new Array(max + 1).fill(0).map((_, i) => i);
}

// 📌 TESTCASE:
console.log(completeSeries([0, 1])); // [0,1]
console.log(completeSeries([1, 4, 6])); // [0,1,2,3,4,5,6]
console.log(completeSeries([3, 4, 5])); // [0,1,2,3,4,5]
console.log(completeSeries([2, 1])); // [0,1,2]
console.log(completeSeries([1, 4, 4, 6])); // [0]