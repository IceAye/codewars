// ❓ DESCRIPTION:
// A lot of goods have an International Article Number (formerly known as "European Article Number") abbreviated "EAN". EAN is a 13-digit barcode consisting of 12 digits followed by a single-digit checksum (EAN-8 is not considered in this kata).
//
// The single-digit checksum is calculated as follows (based upon the first 12 digits):
//
// The digits at the first, third, fifth, etc. positions (i.e. at the odd positions) are multiplied by 1.
// The digits at the second, fourth, sixth, etc. positions (i.e. at the even positions) are multiplied by 3.
// Sum these results.
// If this sum is divisible by 10, the checksum is 0. Otherwise the checksum has the following formula:
// checksum=10−(sum mod 10)
//
// Your Task
// Validate a given EAN-Code. Return True/true if the given EAN-Code is valid, otherwise False/false.
//
// Assumption
// You can assume the given code is syntactically valid, i.e. it only consists of numbers and it exactly has a length of 13 characters.
//
// ✅ SOLUTION:
function validateEAN(eanCode) {
    let sum = 0;
    for (let i = 0; i < eanCode.length - 1; i++) {
        sum += i % 2 === 0 ? +eanCode[i] : +eanCode[i] * 3;
    }
    let checksum = 0;
    let lastDigitOfNumber = +eanCode[eanCode.length - 1];
    if (sum % 10 !== 0) {
        checksum = 10 - (sum % 10);
    }
    return checksum === lastDigitOfNumber;
}

// 📌 TESTCASE:
console.log(validateEAN("9783815820865"), true, "Check EAN-Code \"9783815820865\"");
console.log(validateEAN("9783815820864"), false, "Check EAN-Code \"9783815820864\"");
console.log(validateEAN("9783827317100"), true, "Check EAN-Code \"9783827317100\"");