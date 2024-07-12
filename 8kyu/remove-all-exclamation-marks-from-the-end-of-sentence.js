// ❓ DESCRIPTION:
// Remove all exclamation marks from the end of sentence.
//
// ✅ SOLUTION:
function remove (string) {
    return string.replace(/!+$/, '')
}

console.log('Output: ' , remove ("Hi!"))
console.log('Output: ' , remove ("Hi!!!"))
console.log('Output: ' , remove ("!Hi!"))
console.log('Output: ' , remove ("!Hi"))