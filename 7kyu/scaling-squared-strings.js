// ❓ DESCRIPTION:
// You are given a string of n lines, each substring being n characters long. For example:
// s = "abcd\nefgh\nijkl\nmnop"
// We will study the "horizontal" and the "vertical" scaling of this square of strings.
// A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').
//
// Example:
// 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
// A v-vertical scaling of a string consists of replicating v times each part of the squared string.
//
// Task:
// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".
//
// ✅ SOLUTION:
function repeatedOneString(str, number) {
    let oneFinalString = "";
    for (const char of str) {
        oneFinalString += char.repeat(number);
    }
    return oneFinalString;
}

function scale(strng, k, n) {
    if (strng === "") return "";
    let array = strng.split("\n");

    let result = [];

    for (const string of array) {
        let oneLongString = repeatedOneString(string, k);

        let i = 0;
        while (i < n) {
            result.push(oneLongString);
            i++;
        }
    }
    return result.join("\n");
}

// 📌 TESTCASE:
let a = "abcd\nefgh\nijkl\nmnop";
let r =
    "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
console.log(scale(a, 2, 3)); // r
console.log(scale("", 5, 5)); // ""
console.log(scale("Kj\nSH", 1, 2)); // "Kj\nKj\nSH\nSH"
