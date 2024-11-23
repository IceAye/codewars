// ❓ DESCRIPTION:
// Write a function named numbers.
// function should return True if all parameters are of the Number type.
// The function should accept any number of parameters.
//
// ✅ SOLUTION 1:
const numbers = (...args ) => {
    return !args.map(a => typeof a === "number").some(item => item === false);
}

// ✅ SOLUTION 2:
const numbers = (...args ) => {
    return args.every(arg => typeof arg === 'number');
}

// 📌 TESTCASE:
console.log(numbers(1, 12, 3, 100)) // true
console.log(numbers("1", "2", "3", "4")) // false
console.log(numbers(1)) // true
console.log(numbers(1, "2", [3, 4], "a")) // false
console.log(numbers(1, NaN, 3)) // true
console.log(numbers(null)) // false