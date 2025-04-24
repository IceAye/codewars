// ❓ DESCRIPTION:
// An array is called zero-balanced if its elements sum to 0 and for each element, there exists another element that is the negative of such. For example,
//
// [1, -1, 2, -2] — zero-balanced, sum of elements is 0 + each element has its own negative;
// [0, 1, -1] — zero-balanced, 0 is the negative of itself (0 == -0);
//
// [3] — not zero-balanced; sum != 0;
// [3, -2, -1] — not zero-balanced, sum == 0, but the array has 3 but not -its negative, -3
// Write a function that returns true if its argument is zero-balanced array, else return false.
//
// Note: an empty array will not sum to 0 since there are no elements in it, therefore, it should be treated as not zero-balanced.
//
//  SOLUTION 1:

function isZeroBalanced(n) {
    const map = new Map();
    let sum = 0;

    for (const number of n) {
        sum += number;
        const current = Math.abs(number);

        if (number !== 0) map.set(current , map.get(current) + 1 || 1);
    }

    return n.length > 0 && sum === 0 && [...map.values()].every(item => item % 2 === 0);
}

// ✅ SOLUTION 2:
function isZeroBalanced(n) {
    let sum = n.reduce((acc, curr) => acc + curr, 0);
    return n.length > 0 && sum === 0 && n.every(item => n.includes(-item));
}

// 📌 TESTCASE:
console.log(isZeroBalanced([0, 0, 0, 0, 0, 0], true));
console.log(isZeroBalanced([0, 1, -1], true));
console.log(isZeroBalanced([0], true));
console.log(isZeroBalanced([0, 0, 0, 0, 0], true));
console.log(isZeroBalanced([1, -1, 2, -2], true));
console.log(isZeroBalanced([3, -3, 5, -5, 7, -7], true));
console.log(isZeroBalanced([3], false));
console.log(isZeroBalanced([-3], false));
console.log(isZeroBalanced([], false));
console.log(isZeroBalanced([3, -2, -1], false));
console.log(isZeroBalanced([1, 1, -2], false));
console.log(isZeroBalanced([-1, 1, -2, 2, -2, -2, -4, 4], false));