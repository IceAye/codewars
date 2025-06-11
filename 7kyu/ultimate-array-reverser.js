// ❓ DESCRIPTION:
// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.
//
// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
// Good luck!
//
// ✅ SOLUTION:
function ultimateReverse(s) {
    const reversedStrings = [...s.join('')].reverse().join('');
    let acc = '';
    let result = [];
    for (let i = 0; i < s.length; i++) {
        const word = reversedStrings.slice(acc.length, s[i].length + acc.length);
        result.push(word);
        acc += word;
    }
    return result;
}

// 📌 TESTCASE:
console.log(
    ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]),
    ["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]
);

console.log(
    ultimateReverse(
        ["?kn", "ipnr", "utotst", "ra", "tsn", "iksr", "uo", "yer",
            "ofebta", "eote", "vahu", "oyodpm", "ir", "hsyn", "amwoH"]
    ),
    ["How", "many", "shrimp", "do", "you", "have", "to", "eat",
        "before", "your", "skin", "starts", "to", "turn", "pink?"]
);