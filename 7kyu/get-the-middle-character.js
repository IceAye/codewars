// ❓ DESCRIPTION:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//
// 📌 EXAMPLES:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// The middle character(s) of the word represented as a string.
//
// ✅ SOLUTION:
function getMiddle( s ) {
    let middle = '';

    for (let i = 0; i < s.length; i++) {
        if (s.length % 2 === 1) {middle = s[(s.length - 1) / 2]}
        if (s.length % 2 === 0) {middle = s[s.length/ 2 - 1] + s[s.length/ 2]}

    }
    return middle;
}