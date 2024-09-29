function vowelIndices(word) {
    let array = [];
    for (let i = 0; i < word.length; i++) {
        if (/[aeiouy]/i.test(word[i])) array.push(i + 1);
    }
    return array;
}

console.log(vowelIndices("mmm"));
console.log(vowelIndices("apple"));
console.log(vowelIndices("orange"));
console.log(vowelIndices("supercalifragilisticexpialidocious"));