// ❓ DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
// 📌 EXAMPLES:
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"
//
// ✅ SOLUTION:
function spinWords( string ) {
    let allArrays = string.split(' ')
    let array = []
    for (let i = 0; i < allArrays.length; i++) {
        (allArrays[i].length < 5) ? array.push(allArrays[i]) :
            array.push(allArrays[i].split('').reverse().join(''))
    }
    return array.join(" ")
}

console.log(spinWords( "Welcome" ))
console.log(spinWords( "Hey fellow warriors" ))
console.log(spinWords( "This sentence is a sentence" ))