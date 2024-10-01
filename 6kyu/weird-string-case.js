// SOLUTION 1:
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

// SOLUTION 2:
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

console.log(toWeirdCase('This is a test'))
console.log(toWeirdCase('UPPER CASE'))
console.log(toWeirdCase('lower case'))
console.log(toWeirdCase(''))