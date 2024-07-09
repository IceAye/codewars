// ❓ DESCRIPTION:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters
// and numeric digits that occur more than once in the input string. The input string can be assumed to contain
// only alphabets (both uppercase and lowercase) and numeric digits.
//
// 📌 EXAMPLES:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
//
// ✅ SOLUTION:
function duplicateCount(text){
    let clearText = text.toLowerCase().split('')
    let letters = {}

    for (let i = 0; i < clearText.length; i++) {
        let item = clearText[i];
        letters[item] = letters[item] ? letters[item] + 1 : 1
    }

    let result = 0
    for (let value of Object.values(letters)) {
        value > 1 ? result += 1 : result
    }

    return result
}

console.log(duplicateCount("abcde"))
console.log(duplicateCount(""))
console.log(duplicateCount("baaAAB"))
console.log(duplicateCount("Indivisibility"))