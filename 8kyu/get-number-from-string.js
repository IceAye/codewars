function getNumberFromString(s) {
    return +s.replace(/\D/g, "")
}

console.log(getNumberFromString("this is number: 7"))
console.log(getNumberFromString("123"))