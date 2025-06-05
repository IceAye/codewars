function sentencify(words) {
    return words.join(' ').replace(/^\w/, c => c.toUpperCase()) + '.';
}


console.log(sentencify(["i", "am", "an", "AI"]), "I am an AI.");
console.log(sentencify(["yes"]), "Yes.");
console.log(sentencify(["FIELDS", "of", "CORN", "are", "to", "be", "sown"]), "FIELDS of CORN are to be sown.");
console.log(sentencify(["i'm", "afraid", "I", "can't", "let", "you", "do", "that"]), "I'm afraid I can't let you do that.");
console.log(sentencify(["let", "there", "be", "light"]), "Let there be light.");
console.log(sentencify(["any", "other", "characters,,,", "should", "be", "ignored"]), "Any other characters,,, should be ignored.");
console.log(sentencify(["extra", "stuff\"''", "stays"]), "Extra stuff\"'' stays.");