// ❓ DESCRIPTION:
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//
// If anything in the text isn't a letter, ignore it and don't return it.
//
// "a" = 1, "b" = 2, etc.
//
// 📌 EXAMPLES:
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
//
// ✅ SOLUTION:
function alphabetPosition( text ) {
    return text.toLowerCase()
        .split('')
        .filter(letter => /[a-z]/gi.test(letter))
        .map(letter => letter.charCodeAt(0) - 96).join(' ');
}