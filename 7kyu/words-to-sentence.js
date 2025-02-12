// ❓ DESCRIPTION:
// Write function which will create a string from a list of strings, separated by space.
//
// ✅ SOLUTION:
function wordsToSentence(words) {
    return words.join(' ');
}

// 📌 TESTCASE:
console.log(wordsToSentence(["hello", "world"])) // "hello world"