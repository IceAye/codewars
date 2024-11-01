// ❓ DESCRIPTION:
// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
//
// ✅ SOLUTION:
function alternateCase(s) {
    return s.replace(/\w/g, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
}

// 📌 TESTCASE:
console.log(alternateCase("abc")) // "ABC"
console.log(alternateCase("ABC")) // "abc"
console.log(alternateCase("Hello World")) // "hELLO wORLD"