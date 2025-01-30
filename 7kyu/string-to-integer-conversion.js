function myParseInt(str) {
    return /^\s*\d+\s*$/g.test(str) ? parseInt(str) : NaN;
}

console.log(myParseInt("1")); // 1
console.log(myParseInt("  1 ")); // 1
console.log(myParseInt("08")); // 8
console.log(myParseInt("5 friends")); // NaN
console.log(myParseInt("16.5")); // NaN
console.log(myParseInt('5 friends'))
console.log(myParseInt('5friends'))
console.log(myParseInt('I <3 u'))
console.log(myParseInt('17.42'))
console.log(myParseInt('0x10'))
console.log(myParseInt('123~~'))
console.log(myParseInt('    1 1'))