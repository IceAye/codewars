// ❓ DESCRIPTION:
// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
//
// ✅ SOLUTION 1:
function toWeirdCase(string) {
    let array = string.split(" ");
    let result = [];
    for (let word of array) {
        let temp = ""
        for (let i = 0; i < word.length; i++) {
            i % 2 === 0 ? temp += word[i].toUpperCase() : temp += word[i].toLowerCase();
        }
        result.push(temp);
    }
    return result.join(" ");
}

// ✅ SOLUTION 2:
function toWeirdCase(string) {
    return string
        .split(" ")
        .map((word) =>
            word
                .split("")
                .map((letter, index) =>
                    index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase(),
                )
                .join(""),
        )
        .join(" ");
}

// 📌 TESTCASE:
console.log(toWeirdCase('This is a test'))
console.log(toWeirdCase('UPPER CASE'))
console.log(toWeirdCase('lower case'))
console.log(toWeirdCase(''))