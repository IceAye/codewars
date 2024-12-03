// ❓ DESCRIPTION:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
//
// ✅ SOLUTION:
function scramble(str1, str2) {
    function toHashmap(word){
        let map = new Map();
        for (const char of word) {
            map.set(char, map.get(char) + 1 || 1);
        }
        return map;
    }
    for (const [key, value] of [...toHashmap(str2).entries()]) {
        if (value > toHashmap(str1).get(key) || !toHashmap(str1).has(key)) return false;
    }
    return true;
}

// 📌 TESTCASE:
console.log(scramble('rkqodlw', 'world')) // True
console.log(scramble('cedewaraaossoqqyt', 'codewars')) // True
console.log(scramble('katas', 'steak')) // False