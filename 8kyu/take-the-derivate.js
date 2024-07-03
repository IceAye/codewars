// ❓ DESCRIPTION:
// This function takes two numbers as parameters,
// the first number being the coefficient, and the second number being the exponent.
// Your function should multiply the two numbers, and then subtract 1 from the exponent.
// Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
// The output of this function should be a string
//
// 📌 EXAMPLE:
// Input: (7, 8) --> Output: "56x^7"
// Input: (5, 9) --> Output: "45x^8"
//
// ✅ SOLUTION:

function derive(coefficient,exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`
}

console.log('Output: ' ,derive(7,8))
console.log('Output: ' ,derive(5, 9))