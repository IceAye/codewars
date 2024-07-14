// ❓ DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.
//
// ✅ SOLUTION:
const abc = '0abcdefghijklmnopqrstuvwxyz'
function high( x ) {
    let words = x.split(' ')
    let chars = []
    for (let i = 0; i < words.length; i++) {
        chars.push(words[i].split('').reduce((sum, current) => sum + abc.indexOf(current), 0))
    }
    return words[chars.indexOf(Math.max(...chars))]
}

console.log('Output: ' , high('man i need a taxi up to ubud'))
console.log('Output: ' , high('what time are we climbing up the volcano'))