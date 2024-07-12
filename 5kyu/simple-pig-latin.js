// ❓ DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.
//
// ✅ SOLUTION:
function pigIt(str){
    return str.replace(/\w+/g, (match) => match.slice(1) + match.at(0) + "ay")
}

console.log('Output: ' , pigIt('Pig latin is cool'))
console.log('Output: ' , pigIt('Hello world !'))