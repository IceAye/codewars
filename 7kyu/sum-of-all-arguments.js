// ❓ DESCRIPTION:
// Write a function that finds the sum of all its arguments.
//
// ✅ SOLUTION:
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

// 📌 TESTCASE:
console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(5, 7, 9)); // 21
console.log(sum(12, 1, 1, 1, 1)); // 16
console.log(sum(12, 1, 1, 1, 1, 1, 1)); // 18