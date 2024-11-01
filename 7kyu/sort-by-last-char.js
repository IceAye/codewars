// ❓ DESCRIPTION:
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.
// All inputs will be valid.
//
// ✅ SOLUTION 1:
function last(x){
    return x.split(" ").sort((a, b) => {
        return (a.at(-1) > b.at(-1)) - (a.at(-1) < b.at(-1));
    })
}

// ✅ SOLUTION 2:
function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

// 📌 TESTCASE:
console.log(last('man i need a taxi up to ubud')) // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last('what time are we climbing up the volcano')) // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
console.log(last('take me to semynak')) // ['take', 'me', 'semynak', 'to']