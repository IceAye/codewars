// ❓ DESCRIPTION:
// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
//
// ✅ SOLUTION:
function topThreeWords(text) {
    let array = text.replace(/\s+/g, " ").replace(/[:/,.]/g, "").trim().split(" ");
    let map = new Map();
    array.map(item => map.set(item.toLowerCase(), map.get(item.toLowerCase()) + 1 || 1));
    return [...map.entries()].sort((a,b) => b[1] - a[1]).slice(0,3)
                             .reduce((acc, curr) => {
                                 if (/\w/g.test(curr[0])) acc.push(curr[0]);
                                 return acc;
                             }, [])
}

// 📌 TESTCASE:
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"))  // ['e','d','a']
console.log(topThreeWords("a a a c b b"))  // ['a','b','c']
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))  // ['e','ddd','aa']
console.log(topThreeWords("  //wont won't won't "))  // ["won't", "wont"]
console.log(topThreeWords("  , e   .. "))  // ["e"]
console.log(topThreeWords("  ...  "))  // []
console.log(topThreeWords("  '  "))  // []
console.log(topThreeWords(
    `In a village of La Mancha, the name of which I have no desire to call to
 mind, there lived not long since one of those gentlemen that keep a lance
 in the lance-rack, an old buckler, a lean hack, and a greyhound for
 coursing. An olla of rather more beef than mutton, a salad on most
 nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
 on Sundays, made away with three-quarters of his income.`))  // ['a','of','on']