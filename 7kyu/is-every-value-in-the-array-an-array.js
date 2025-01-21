// ❓ DESCRIPTION:
// Is every value in the array an array?
// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
//
// ✅ SOLUTION:
const arrCheck = (value) => value.every((item) => Array.isArray(item));

// 📌 TESTCASE:
console.log(arrCheck([])); // true
console.log(arrCheck([["string"]])); // true
console.log(arrCheck([[], {}])); // false
console.log(arrCheck([[1], [2], [3]])); // true
console.log(arrCheck(["A", "R", "R", "A", "Y"])); // false