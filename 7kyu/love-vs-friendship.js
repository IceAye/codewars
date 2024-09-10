// SOLUTION 1:
function wordsToMarks(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        sum += string.charCodeAt(i) - 96;
    }
    return sum;
}

// SOLUTION 2 (with reduce):
function wordsToMarks(string) {
    return [...string].reduce((sum, currentChar) => sum + currentChar.charCodeAt() - 96, 0);
}

console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("family"));
console.log(wordsToMarks("selfness"));
console.log(wordsToMarks("knowledge"));
