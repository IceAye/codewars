// ❓ DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
//
// 📌 EXAMPLES:
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"
//
// ✅ SOLUTION:
let isAnagram = function(test, original) {
    let arrTest = test.toLowerCase().split('').sort().join('')
    let arrOriginal = original.toLowerCase().split('').sort().join('')
    return arrTest === arrOriginal
};