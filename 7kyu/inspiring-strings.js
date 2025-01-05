function longestWord(stringOfWords) {
    return stringOfWords.split(" ").reduce((max, curr) => {
        if (max.length <= curr.length) {
            max = curr;
        }
        return max;
    }, "");
}

console.log(longestWord("lonely")); //, 'lonely'
console.log(longestWord("a pair")); //, 'pair'
console.log(longestWord("a b c d e fgh")); //, 'fgh'
console.log(longestWord("one two three")); //, 'three'
console.log(longestWord("red blue grey")); // 'grey'
console.log(longestWord("forward each step going")); // 'forward'