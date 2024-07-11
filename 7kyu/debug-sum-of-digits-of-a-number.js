// ❓ DESCRIPTION:
// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits.
// Assume that argument is an integer.
// ✅ SOLUTION:
function getSumOfDigits(integer) {
    let sum = 0
    let digits =  integer.toString();
    for(let i = 0; i < digits.length; i++) {
        sum += +digits[i]
    }
    return sum
}
console.log('Output: ' , getSumOfDigits(123))
console.log('Output: ' , getSumOfDigits(223))