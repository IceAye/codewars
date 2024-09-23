// ❓ DESCRIPTION:
// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.
//
// ✅ SOLUTION:
function any(arr, fun){
    return arr.some(fun)
}

// 📌 TESTCASE:
console.log(any([1,2,3,4], function(v, i){return v > 3}))
console.log(any([1,2,3,4], function(v, i){return v > 4}))
console.log(any([], function(v, i){return v > 4}))