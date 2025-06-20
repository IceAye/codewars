// ❓ DESCRIPTION:
// You are given an array of values.
// Sum every number value in the array, and any nested arrays (to any depth).
// Ignore all other types of values.
//
// ✅ SOLUTION:
function arraySum(arr) {
    return arr.flat(Infinity).reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0);
}

// 📌 TESTCASE:
console.log(arraySum([1, 2]), 3);
console.log(arraySum([1, 2, 3]), 6);
console.log(arraySum([1, 2, [1, 2]]), 6);
console.log(arraySum([ 1, 2, [ 1, 2, 3, [ 5, 1, 0 ] ] ]), 15);