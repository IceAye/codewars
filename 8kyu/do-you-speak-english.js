// ❓ DESCRIPTION:
// Given a string of arbitrary length with any ascii characters.
// Write a function to determine whether the string contains the whole word "English".
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
// Return value as boolean values, true for the string to contains "English", false for it does not.
//
// ✅ SOLUTION:
function spEng( sentence ) {
    return (/english/i).test(sentence)
}

console.log('Output: ' , spEng("engliSh"))
console.log('Output: ' , spEng("egnlish"))