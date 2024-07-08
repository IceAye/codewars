// ❓ DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//
// 📌 EXAMPLES:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//
// ✅ SOLUTION:
function digitalRoot(n) {
    if (n < 10) {
        return n;
    }
    while (n > 9) {
        let digits = String(n).split('').map(Number);
        n = digits.reduce((sum, current) => sum + current);
    }
    return n;
}

console.log(digitalRoot(16))
console.log(digitalRoot(195))
console.log(digitalRoot(167346))