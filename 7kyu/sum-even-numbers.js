// ❓ DESCRIPTION:
// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.
// Only numbers without decimals like 4 or 4.0 can be even.
// The input is a sequence of numbers: integers and/or floats.
//
// ✅ SOLUTION:
function sumEvenNumbers(input) {
    return input.reduce((acc, curr) => (curr % 2 === 0 ? curr : 0) + acc, 0)
}

// 📌 TESTCASE:
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));