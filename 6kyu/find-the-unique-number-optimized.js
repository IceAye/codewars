// ❓ DESCRIPTION:
// Write a function called findUnique which returns the only unique number from an array.
// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.
//
// ✅ SOLUTION 1:
function findUnique(numbers) {
    const count = {};

    for (const number of numbers) {
        count[number] = count[number] + 1 || 1;
    }

    for (const item in count) {
        if (count[item] === 1) return +item;
    }
}

// ✅ SOLUTION 2:
function findUnique(numbers) {
    return numbers.reduce((a, b) => a ^ b);
}

// 📌 TESTCASE:
console.log(findUnique([1, 8, 4, 4, 6, 1, 8])); // 6
console.log(findUnique([1234567])); // 1234567
console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2])); // 1
console.log(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1])); // 4
console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9])); // 9