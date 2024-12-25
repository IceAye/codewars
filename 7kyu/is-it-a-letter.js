// ❓ DESCRIPTION:
// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.
//
// ✅ SOLUTION:
function isItLetter(character) {
    return /[a-z]/gi.test(character);
}


// 📌 TESTCASE:
console.log(isItLetter('a')) // true
console.log(isItLetter('1')) // false