// ❓ DESCRIPTION:
// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
//
// ✅ SOLUTION:
function deepCount(a) {
    let count = a.length;
    for (const item of a) {
        if (Array.isArray(item)) {
            count += deepCount(item);
        }
    }
    return count;
}

// 📌 TESTCASE:
console.log(deepCount([])) // 0
console.log(deepCount([1, 2, 3])) // 3
console.log(deepCount(["x", "y", ["z"]])) // 4
console.log(deepCount([1, 2, [3, 4, [5]]])) // 7
console.log(deepCount([[[[[[[[[]]]]]]]]])) // 8