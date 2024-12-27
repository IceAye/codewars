// ❓ DESCRIPTION:
// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.
//
// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"
//
// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.
//
// ✅ SOLUTION 1:
function validateWord(s) {
    let map = new Map();
    for (const char of s) {
        let pureChar = char.toUpperCase()
        map.set(pureChar, map.get(pureChar) + 1 || 1);
    }
    return new Set(map.values()).size === 1;
}

// ✅ SOLUTION 2:
function validateWord(s) {
    let c = s.toLowerCase()
    return c.length % new Set(c).size === 0
}

// 📌 TESTCASE:
console.log(validateWord("abcabc")); // true
console.log(validateWord("Abcabc")); // true
console.log(validateWord("abc123")); // true
console.log(validateWord("abcabcd")); // false
console.log(validateWord("abc!abc!")); // true
console.log(validateWord("abc:abc")); // false