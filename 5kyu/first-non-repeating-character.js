// ❓ DESCRIPTION:
// Write a function named first_non_repeating_letter† that takes a string input,
// and returns the first character that is not repeated anywhere in the string.
//
// For example, if given the input 'stress', the function should return 't',
// since the letter t only occurs once in the string, and occurs first in the string.
//
// As an added challenge, upper- and lowercase letters are considered the same character,
// but the function should return the correct case for the initial letter.
// For example, the input 'sTreSS' should return 'T'.
//
// If a string contains all repeating characters, it should return an empty string ("").
//
// ✅ SOLUTION:
function firstNonRepeatingLetter( s ) {
    let array = s.toLowerCase().split('')
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
            return s[i]
        }
    }
    return ''
}

console.log('Output: ' , firstNonRepeatingLetter('sTress'))
console.log('Output: ' , firstNonRepeatingLetter('moonmen'))
