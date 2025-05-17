// ❓ DESCRIPTION:
// You need to write a function, that returns the first non-repeated character in the given string.
// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.
// You can assume, that the input string has always non-zero length.
//
// ✅ SOLUTION:
function firstNonRepeated(s) {
    return [...s].find((item) => s.indexOf(item) === s.lastIndexOf(item)) || null;
}

// 📌 TESTCASE:
console.log(firstNonRepeated("test"), 'e')
console.log(firstNonRepeated("teeter"), 'r')
console.log(firstNonRepeated("1122321235121222"), '5')
console.log(firstNonRepeated("rend"), 'r')