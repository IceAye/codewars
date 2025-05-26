// ❓ DESCRIPTION:
// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).
// Consonants are letters used in English other than "a", "e", "i", "o", "u".
// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.
// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.
//
// ✅ SOLUTION:
function countConsonants(str) {
    return new Set(str.toLowerCase().replace(/[^qwrtypsdfghjklzxcvbnm]/gi, '')).size;
}

// 📌 TESTCASE:
console.log(countConsonants("sillystring", 7))
console.log(countConsonants("aeiou", 0))
console.log(countConsonants("abcdefghijklmnopqrstuvwxyz", 21))
console.log(countConsonants("Count my unique consonants!!", 7))
console.log(countConsonants("bcdfghjklmnpqrstvwxyz", 21))
