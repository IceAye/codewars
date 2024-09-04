// ❓ DESCRIPTION:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//
// ✅ SOLUTION:
function order(words){
    return words.split(' ')
        .sort((a,b) => a.match(/\d/) - b.match(/\d/))
        .join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order(""))
console.log(order("3 6 4 2 8 7 5 1 9"))