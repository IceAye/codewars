// ❓ DESCRIPTION:
// You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.
// The function should contain at least 1 argument per set.
//
// ✅ SOLUTION:
function calculate(...args1) {
    return (...args2) => {
        return [...args1, ...args2].reduce((acc, curr) => acc + curr, 0);
    }
}

// 📌 TESTCASE:
console.log(calculate(1)(1)) // 2
console.log(calculate(1,1)(1)) // 3
console.log(calculate(1,1)(1,-1)) // 2
console.log(calculate(2,4)(3,7,1)) // 17