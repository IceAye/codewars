// ❓ DESCRIPTION:
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
// N! = 1 * 2 * 3 *  ... * N
// Be careful 1000! has 2568 digits...
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
//
// ✅ SOLUTION:
function zeros(n) {
    let count = 0;

    let i = 5;
    while ((n / i) >= 1) {
        count += Math.floor(n / i);
        i *= 5;
    }

    return Math.floor(count);
}

// 📌 TESTCASE:
console.log(zeros(0)); // 0
console.log(zeros(5)); // 1
console.log(zeros(6)); // 1
console.log(zeros(30)); // 7
console.log(zeros(40)); // 9
console.log(zeros(1000)); //249
console.log(zeros(805360861)); //201340209