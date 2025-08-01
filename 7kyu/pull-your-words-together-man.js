// ❓ DESCRIPTION:
// Your friend Robbie has successfully created an AI that is capable of communicating in English!
//
// Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:
//
// ["this","is","a","sentence"]
// Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.
//
// Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his code, a sentencify function, which takes the output that the machine gives, and formats it into proper English orthography.
//
// Your function should:
//
// Capitalise the first letter of the first word.
// Add a period (.) to the end of the sentence.
// Join the words into a complete string, with spaces.
// Do no other manipulation on the words.
//
// ✅ SOLUTION:
function sentencify(words) {
    return words.join(' ').replace(/^\w/, c => c.toUpperCase()) + '.';
}

// 📌 TESTCASE:
console.log(sentencify(["i", "am", "an", "AI"]), "I am an AI.");
console.log(sentencify(["yes"]), "Yes.");
console.log(sentencify(["FIELDS", "of", "CORN", "are", "to", "be", "sown"]), "FIELDS of CORN are to be sown.");
console.log(sentencify(["i'm", "afraid", "I", "can't", "let", "you", "do", "that"]), "I'm afraid I can't let you do that.");
console.log(sentencify(["let", "there", "be", "light"]), "Let there be light.");
console.log(sentencify(["any", "other", "characters,,,", "should", "be", "ignored"]), "Any other characters,,, should be ignored.");
console.log(sentencify(["extra", "stuff\"''", "stays"]), "Extra stuff\"'' stays.");