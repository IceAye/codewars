// ❓ DESCRIPTION:
// Write a function which removes from string all non-digit characters and parse the remaining to number.
//
// 📌 EXAMPLE:
// "hell5o wor6ld" -> 56
//
// ✅ SOLUTION:

function getNumberFromString(s) {
    return +s.replace(/\D/g, "")
}

console.log(getNumberFromString("this is number: 7"))
console.log(getNumberFromString("123"))