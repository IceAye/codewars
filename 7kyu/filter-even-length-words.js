// ❓ DESCRIPTION:
// Given an array of strings, write a function that returns an array containing only the elements of the given array whose length is an even number.

// ✅ EXAMPLE
// ["One", "Two", "Three", "Four"] --> ["Four"]

// 📌 SOLUTION:
function filterEvenLengthWords(words) {
    return words.filter(word => word.length % 2 === 0);
}