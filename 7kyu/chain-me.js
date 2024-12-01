// ❓ DESCRIPTION:
// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).
// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.
//
// ✅ SOLUTION:
function chain(input, fs) {
    return fs.reduce((input, curr) => curr(input), input);
}

// 📌 TESTCASE:
function add(x) {
    return x + 10;
}

function mult(x) {
    return x * 30;
}

console.log(chain(2, [add, mult])) // 360