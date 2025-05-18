// ❓ DESCRIPTION:
// Write a function that adds from two invocations.
//
// All inputs will be integers.
// add(3)(4)  // 7
// add(12)(20) // 32
//
// ✅ SOLUTION:
function add(number) {
    return (sum) => sum + number;
}

// 📌 TESTCASE:
console.log(add(2)(5), 7)
console.log(add(14)(25), 39)