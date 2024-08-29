function splitAndMerge(string, separator) {
    return string
        .split(" ")
        .map((item) => item.split("").join(separator))
        .join(" ");
}

console.log(splitAndMerge("My name is John", "-"));
console.log(splitAndMerge("Hello World!", "."));
console.log(splitAndMerge("Hello World!", ","));
