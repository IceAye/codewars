// ❓ DESCRIPTION:
// Each floating-point number should be formatted that only the first two decimal places are returned. You don't need
// to check whether the input is a valid number because only valid numbers are used in the tests.  Don't round the
// numbers! Just cut them after two decimal places!
//
// ✅ SOLUTION:
function twoDecimalPlaces(number) {
    return Math.trunc(number * 100) / 100
}

// 📌 TESTCASE:
console.log(twoDecimalPlaces(10.1289767789)) // 10.12
console.log(twoDecimalPlaces(-7488.83485834983)) // -7488.83
console.log(twoDecimalPlaces(4.653725356)) // 4.65
console.log(twoDecimalPlaces(10.1289767789)) // 10.12