function isDigit(s) {
    return !Number.isNaN(+s) && s.trim() !== ""
}

console.log(isDigit("s2324"))
console.log(isDigit("-2324"))
console.log(isDigit(""))
console.log(isDigit(" "))