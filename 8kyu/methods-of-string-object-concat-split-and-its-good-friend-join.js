// ❓ DESCRIPTION:
// Implement a function which accepts 2 arguments: string and separator.
//
// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
//
// ✅ SOLUTION:
function splitAndMerge(string, separator) {
    return string
        .split(" ")
        .map((item) => item.split("").join(separator))
        .join(" ");
}

console.log(splitAndMerge("My name is John", "-"));
console.log(splitAndMerge("Hello World!", "."));
console.log(splitAndMerge("Hello World!", ","));
