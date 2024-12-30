// ❓ DESCRIPTION:
// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
//
// Note: the input will not be empty.
//
// ✅ SOLUTION:
function calculate(str) {
    return eval(str.replace(/plus/g, "+").replace(/minus/g, "-")).toString()
}

// 📌 TESTCASE:
console.log(calculate("1plus2plus3plus4")); // '10'
console.log(calculate("1minus2minus3minus4")); // '-8'
console.log(calculate("1plus2plus3minus4")); // '2'