// ❓ DESCRIPTION:
// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can
// be one of many different types so be aware.
//
// ✅ SOLUTION:
function parseF( s ) {
    return Number.isNaN(parseFloat(s)) ? null : parseFloat(s);
}

console.log(parseF("1"));
console.log(parseF("string"));
console.log(parseF("2.5"));
console.log(parseF(0));