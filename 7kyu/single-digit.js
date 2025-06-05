// ❓ DESCRIPTION:
// The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.
//
// If the passed integer is already a single digit there is no need to reduce
// n will be an integer such that 0 < n < 10⁹
// For example given 5665 the function should return 5:
//
// 5665 --> (binary) 1011000100001
// 1011000100001 --> (sum of binary digits) 5
// Given 123456789 the function should return 1:
//
// 123456789 --> (binary) 111010110111100110100010101
// 111010110111100110100010101 --> (sum of binary digits) 16
// 16 --> (binary) 10000
// 10000 --> (sum of binary digits) 1
//
// ✅ SOLUTION 1:
function singleDigit(n) {
    if (n < 10) return n;
    let binary = n.toString(2).replace(/0/g, '').length;
    return singleDigit(binary);
}

// ✅ SOLUTION 2:
function singleDigit(n) {
    while(n > 9){
        n = n.toString(2).replace(/0/g, "").length;
    }
    return n;
}

// 📌 TESTCASE:
console.log(singleDigit(5), 5)
console.log(singleDigit(999), 8)
console.log(singleDigit(1234444123), 1)
console.log(singleDigit(443566), 2)
console.log(singleDigit(565656565), 3)
console.log(singleDigit(4868872), 8)
console.log(singleDigit(234234235), 2)
console.log(singleDigit(567448), 7)
console.log(singleDigit(1000000000), 3)