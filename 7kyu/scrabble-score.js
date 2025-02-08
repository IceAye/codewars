function scrabbleScore(str) {
    let count = 0;
    for (const char of str) {
        if ($dict[char.toUpperCase()] !== undefined) count += $dict[char.toUpperCase()]
    }
    return count;
}

console.log(scrabbleScore("")) // 0
console.log(scrabbleScore('a')) // 1
console.log(scrabbleScore("street")) // 6
console.log(scrabbleScore(' a')) // 1
console.log(scrabbleScore("st re et")) // 6