// ❓ DESCRIPTION:
// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s.
// For any given binary number,formatted as a string, return the Ones' Complement of that number.
//
// ✅ SOLUTION:
function onesComplement(n) {
    return n.replace(/./g, c => c === "0" ? "1" : "0");
}

// 📌 TESTCASE:
console.log(onesComplement("0")) // "1"
console.log(onesComplement("1")) // "0"
console.log(onesComplement("01")) // "10"
console.log(onesComplement("10")) // "01"
console.log(onesComplement("1101")) // "0010"