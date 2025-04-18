// ❓ DESCRIPTION:
// A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with
// amusing results.
// In its most basic form a spoonerism is a two word phrase in which only the first letters of each
// word are swapped:  "not picking" --> "pot nicking"
// Your task is to create a function that takes a string of two
// words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A
// "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the
// numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers
// are included in the inputs for the random test cases and they require no special treatment.
// NOTE: All input strings will contain only two words. Spoonerisms can be more complex.
// For example, three-word phrases in which the first
// letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a
// word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances
// involved in spoonerisms.
//
// ✅ SOLUTION 1:
function spoonerize(words) {
    let [word1 , word2] = words.split(" ");

    function change(word1 , word2) {
        return word2[0] + word1.slice(1);
    }

    return change(word1 , word2) + " " + change(word2 , word1);
}

// ✅ SOLUTION 2:
function spoonerize(words) {
    let [word1 , word2] = words.split(" ");
    [word1 , word2] = [word2[0] + word1.slice(1) , word1[0] + word2.slice(1)];
    return [word1 , word2].join(" ")
}

// 📌 TESTCASE:
console.log(spoonerize("nit picking")) // "pit nicking"
console.log(spoonerize("wedding bells")) // "bedding wells"
console.log(spoonerize("jelly beans")) // "belly jeans"