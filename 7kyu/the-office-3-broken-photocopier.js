// ❓ DESCRIPTION:
// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary
// code!  Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
// Given a string of binary, return the version the photocopier gives you as a string.
//
// ✅ SOLUTION 1:
function broken(x) {
    return x.replace(/./g , (char) => (char === "1" ? "0" : "1"));
}

// ✅ SOLUTION 2:
function broken(x) {
    return x.replace(/./g , (char) => char ^ 1);
}

// 📌 TESTCASE:
console.log(broken("1")); // "0"
console.log(broken("10000000101101111110011001000")); // "01111111010010000001100110111"
console.log(broken("100010")); // "011101"
