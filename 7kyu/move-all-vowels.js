// ❓ DESCRIPTION:
// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.
// Vowels are (in this kata): a, e, i, o, u
// Note: all provided input strings are lowercase.

// ✅ SOLUTION:
function moveVowel(input) {
    const vowels = input.match(/[aeiou]/g || []).join('');
    return input.replace(/[aeiou]/g, '') + vowels;
}

// 📌 TESTCASE:
console.log(moveVowel("day"),"dya");
console.log(moveVowel("apple"),"pplae");
console.log(moveVowel("peace"),"pceae");
console.log(moveVowel("maker"),"mkrae");