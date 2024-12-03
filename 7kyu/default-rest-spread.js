// ❓ DESCRIPTION:
// Your task is to Refactor these functions to pass the tests and to follow the new JS ES2015 examples below!
// Default
// In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value. This is where default parameters can help.
// In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are undefined. If in the following example, no value is provided for b in the call, its value would be undefined when evaluating a*b and the call to multiple would have returned NaN.
// With default parameters, the check in the function body is no longer necessary.
// Rest
// Rest parameters have been introduced to reduce the boilerplate code that was induced by the arguments ```javascript
// Spread
// Any argument in the argument list can use the spread syntax and it can be used multiple times.
//
// ✅ SOLUTION:
function defaultExample(x, y = 7) {
    return x + y;
}

function restExample(x, ...y) {
    return x * y.length;
}

function spreadExample(...x) {
    return x[0] + x[1] + x[2];
}

// 📌 TESTCASE:
console.log(defaultExample(3, 7)) // 10
console.log(defaultExample(3)) // 10
console.log(defaultExample(5)) // 12
console.log(restExample(3,'14',6)) // 6
console.log(restExample(5,'854',7,4)) // 15
console.log(restExample(9)) // 0
console.log(spreadExample(...[1,2,3])) // 6
console.log(spreadExample(...[6,6,6])) // 18
console.log(spreadExample(...[1,1,1])) // 3