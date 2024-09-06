function toFreud(string) {
    return string !== "" ? string.split(" ").map(item => "sex").join(" ") : ""
}

console.log(toFreud(""));
console.log(toFreud("This is a test"));
console.log(toFreud("You're becoming a true freudian expert"));
