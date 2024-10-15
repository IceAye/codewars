// ❓ DESCRIPTION:
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.
// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
//
// ✅ SOLUTION:
function hasUniqueChars(str){
    return new Set(str).size === str.length
}

// 📌 TESTCASE:
console.log(hasUniqueChars("  nAa"));
console.log(hasUniqueChars("abcdef"));
console.log(hasUniqueChars("aA"));