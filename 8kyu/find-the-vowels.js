// ❓ DESCRIPTION:
// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)
//
// ✅ SOLUTION:
function vowelIndices(word) {
    let array = [];
    for (let i = 0; i < word.length; i++) {
        if (/[aeiouy]/i.test(word[i])) array.push(i + 1);
    }
    return array;
}

// 📌 TESTCASE:
console.log(vowelIndices("mmm"));
console.log(vowelIndices("apple"));
console.log(vowelIndices("orange"));
console.log(vowelIndices("supercalifragilisticexpialidocious"));