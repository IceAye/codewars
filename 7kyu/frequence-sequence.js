// ❓ DESCRIPTION:
// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).
//
// ✅ SOLUTION:
function freqSeq(str, sep) {
    let map = new Map();
    for (const char of str) {
        map.set(char, map.get(char) + 1 || 1);
    }
    return [...str].map((item) => map.get(item)).join(sep);
}

// 📌 TESTCASE:
console.log(freqSeq("hello world", "-")); // '1-1-3-3-2-1-1-2-1-3-1'
console.log(freqSeq("19999999", ":")); // '1:7:7:7:7:7:7:7'
console.log(freqSeq("^^^**$", "x")); // '3x3x3x2x2x1'