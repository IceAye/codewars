// ❓ DESCRIPTION:
// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.
//
// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)
//
// ✅ SOLUTION 1:
function alphabetic(s) {
    for (let i = 0; i < s.length - 1; i++) {
        if (s.charCodeAt(i) > s.charCodeAt(i + 1)) return false;
    }
    return true;
}

// ✅ SOLUTION 2:
function alphabetic(s) {
    return s === s.split("").sort().join("");
}

// 📌 TESTCASE:
console.log(alphabetic("asd")) // false
console.log(alphabetic("codewars")) // false
console.log(alphabetic("door")) // true
console.log(alphabetic("cell")) // true
console.log(alphabetic("z")) // true
console.log(alphabetic("")) // true