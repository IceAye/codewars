// ❓ DESCRIPTION:
// Compare two strings by comparing the sum of their values (ASCII character code).
//
// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.
//
// ✅ SOLUTION:
function compare(s1, s2) {
    function preCompare(string) {
        if (/[^a-zA-Z]/gi.test(string) || string === null || string === "") {
            return 0;
        } else
            return [...string.toUpperCase()].reduce((acc, curr) => acc + curr.charCodeAt(0), 0,);
    }
    return preCompare(s1) === preCompare(s2)
}

// 📌 TESTCASE:
console.log(compare("AD", "BC")) // true
console.log(compare("AD", "DD")) // false
console.log(compare("gf", "FG")) // true
console.log(compare("Ad", "DD")) // false
console.log(compare("zz1", "")) // true
console.log(compare("ZzZz", "ffPFF")) // true
console.log(compare("kl", "lz")) // false
console.log(compare("!!", "7476")) // true
console.log(compare("##", "1176")) // true
console.log(compare(null, "BC")) // false
console.log(compare(null, null)) // true
console.log(compare(null, "")) // true
console.log(compare("", "")) // true
