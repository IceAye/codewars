function getNumberFromString(s) {
    return +s.replace(/[^\d]/gi, "")
}

console.log(getNumberFromString("this is number: 7"))
console.log(getNumberFromString("123"))