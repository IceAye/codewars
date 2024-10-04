// ❓ DESCRIPTION:
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
//
// ✅ SOLUTION:
function reverseNumber(n) {
    if (n >= 0 && n < 10) return n;
    return Math.sign(n) * +[...Math.abs(n).toString()].reverse().join("");
}

// 📌 TESTCASE:
console.log(reverseNumber(5));
console.log(reverseNumber(123));
console.log(reverseNumber(-123));
console.log(reverseNumber(1000));
console.log(reverseNumber(4321234));