function flipNumber(s) {
    let array = s.split("");
    for (let i = 0; i < array.length; i++) {
        array = [...array.slice(0, i), ...array.slice(i).reverse()];
    }
    return array.join("");
}

console.log(flipNumber("012"), "201");
console.log(flipNumber("012345"), "504132");
console.log(flipNumber("0123456789"), "9081726354");