// ❓ DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// ✅ SOLUTION:
const doubleChar = (str) => str.split("").map(item => item + item).join("");

console.log(doubleChar("abcd"))
console.log(doubleChar("Adidas"))
console.log(doubleChar("%^&*("))