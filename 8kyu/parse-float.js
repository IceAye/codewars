function parseF(s) {
    return Number.isNaN(parseFloat(s)) ? null : parseFloat(s);
}

console.log(parseF("1"));
console.log(parseF("string"));
console.log(parseF("2.5"));
console.log(parseF(0));