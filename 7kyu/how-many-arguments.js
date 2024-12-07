// ❓ DESCRIPTION:
// Write a function that returns the number of arguments it received.
//
// ✅ SOLUTION 1:
function args_count(...args) {
    return args.length;
}

// ✅ SOLUTION 2:
function args_count() {
    return arguments.length;
}

// 📌 TESTCASE:
console.log(args_count(1, 2)) // 2
console.log(args_count()) // 0
console.log(args_count('A', 'B', 'C')) // 3
console.log(args_count(["foo", "bar"])) // 1