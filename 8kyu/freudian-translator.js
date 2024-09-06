// SOLUTION 1:
function toFreud(string) {
    return string !== "" ? string.split(" ").map(item => "sex").join(" ") : ""
}

// SOLUTION 2 (regular expression)
function toFreud(string) {
    return string.replace(/[^\s]+/g, "sex")
}

console.log(toFreud(""));
console.log(toFreud("This is a test"));
console.log(toFreud("You're becoming a true freudian expert"));
