// ❓ DESCRIPTION:
// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.
// Your function should return true if all elements in the array are square numbers and false if not.
// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.
//
// ✅ SOLUTION:
const isSquare = function (arr) {
    if (arr.length) {
        for (const item of arr) {
            if (!Number.isInteger(Math.sqrt(item))) {
                return false;
            }
        }
        return true;
    }
};

// 📌 TESTCASE:
console.log(isSquare([1, 4, 9, 16, 25, 36])) // true
console.log(isSquare([1, 2, 3, 4, 5, 6])) // false
console.log(isSquare([])) // undefined
console.log(isSquare([1, 2, 4, 15])) // false
