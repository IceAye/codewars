function wordsToMarks(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        sum += string.charCodeAt(i) - 96;
    }
    return sum;
}

console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("family"));
console.log(wordsToMarks("selfness"));
console.log(wordsToMarks("knowledge"));
