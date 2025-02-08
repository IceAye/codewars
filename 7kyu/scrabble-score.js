// ❓ DESCRIPTION:
// Write a program that, given a word, computes the scrabble score for that word.
// There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.
//
// ✅ SOLUTION:
function scrabbleScore(str) {
    let count = 0;
    for (const char of str) {
        if ($dict[char.toUpperCase()] !== undefined) count += $dict[char.toUpperCase()]
    }
    return count;
}

// 📌 TESTCASE:
console.log(scrabbleScore("")) // 0
console.log(scrabbleScore('a')) // 1
console.log(scrabbleScore("street")) // 6
console.log(scrabbleScore(' a')) // 1
console.log(scrabbleScore("st re et")) // 6