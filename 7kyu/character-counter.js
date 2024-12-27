function validateWord(s) {
    let map = new Map();
    for (const char of s) {
        let pureChar = char.toUpperCase()
        map.set(pureChar, map.get(pureChar) + 1 || 1);
    }
    return new Set(map.values()).size === 1;
}

function validateWord(s) {
    let c = s.toLowerCase()
    return c.length % new Set(c).size === 0
}

console.log(validateWord("abcabc")); // true
console.log(validateWord("Abcabc")); // true
console.log(validateWord("abc123")); // true
console.log(validateWord("abcabcd")); // false
console.log(validateWord("abc!abc!")); // true
console.log(validateWord("abc:abc")); // false