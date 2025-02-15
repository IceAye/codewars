// ❓ DESCRIPTION:
// Create a function that takes an array of letters, and combines them into words in a sentence.
// The function should combine all the 0th indexed letters of each sub-array to create the word Just, all the 1st indexed letters of each sub-array to create the word Live, etc.
// If a word is shorter than the maximum length, the remaining positions in the sub-array will contain empty strings (e.g., the last element in the last sub-array).
//
// ✅ SOLUTION:
function arrAdder(arr) {
    let result = [];
    let i = 0;
    let maxLength = arr.reduce((acc, curr) => acc.length > curr.length ? acc.length : curr.length);
    while (i < maxLength) {
        let item = "";
        for (const str of arr) {
            item += str[i];
        }
        result.push(item.trim());
        i++;
    }
    return result.join(" ");
}

// 📌 TESTCASE:
console.log(arrAdder([['J', 'L', 'L', 'M'], ['u', 'i', 'i', 'a'], ['s', 'v', 'f', 'n'], ['t', 'e', 'e', '']])) // "Just Live Life Man"
console.log(arrAdder([
    ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
    ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
    ['e', 't', '', 'e', 'w', '', 'e', 'l'],
    ['', 'o', '', '', 'e', '', '', 'l'],
    ['', 'c', '', '', 'r', '', '', ''],
    ['', 'h', '', '', 'h', '', '', ''],
    ['', 'o', '', '', 'o', '', '', ''],
    ['', 'n', '', '', 'u', '', '', ''],
    ['', 'd', '', '', 's', '', '', ''],
    ['', 'r', '', '', 'e', '', '', ''],
    ['', 'i', '', '', '', '', '', ''],
    ['', 'a', '', '', '', '', '', '']
])) // "The Mitochondria is the powerhouse of the cell"