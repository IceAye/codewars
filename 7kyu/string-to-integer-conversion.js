// ❓ DESCRIPTION:
// JavaScript provides a built-in parseInt method.
//
// It can be used like this:
// parseInt("10") returns 10
// parseInt("10 apples") also returns 10
// We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.
// You are asked to write a myParseInt method with the following rules:
//
// It should make the conversion if the given string only contains a single integer value (and possibly spaces - including tabs, line feeds... - at both ends)
// For all other strings (including the ones representing float values), it should return NaN
// It should assume that all numbers are not signed and written in base 10
//
// ✅ SOLUTION:
function myParseInt(str) {
    return /^\s*\d+\s*$/g.test(str) ? parseInt(str) : NaN;
}

// 📌 TESTCASE:
console.log(myParseInt("1")); // 1
console.log(myParseInt("  1 ")); // 1
console.log(myParseInt("08")); // 8
console.log(myParseInt("5 friends")); // NaN
console.log(myParseInt("16.5")); // NaN
console.log(myParseInt('5 friends'))
console.log(myParseInt('5friends'))
console.log(myParseInt('I <3 u'))
console.log(myParseInt('17.42'))
console.log(myParseInt('0x10'))
console.log(myParseInt('123~~'))
console.log(myParseInt('    1 1'))