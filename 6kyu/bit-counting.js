// ❓ DESCRIPTION:
// Write a function that takes an integer as input,
// and returns the number of bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.
//
// 📌 EXAMPLE:
// The binary representation of 1234 is 10011010010, so the function should return 5 in this case:
//
// ✅ SOLUTION:
let countBits = function(n) {
    return n.toString(2).split('').reduce((sum, current) => +sum + +current, 0)
}

console.log(countBits(4))
console.log(countBits(26))
console.log(countBits(77231418))