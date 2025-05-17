// ❓ DESCRIPTION:
// Given a positive integer N, return the largest integer k such that 3^k < N.
//
// For example,
// largest_power(3) == 0
// largest_power(4) == 1
// You may assume that the input to your function is always a positive integer.
//
// ✅ SOLUTION:
function largestPower(n){
    let i = 0;
    while (Math.pow(3, i) < n) {
        i++;
    }
    return i - 1;
}

// 📌 TESTCASE:
console.log(largestPower(3), 0)
console.log(largestPower(5), 1)
console.log(largestPower(7), 1)
console.log(largestPower(81), 3)
console.log(largestPower(82), 4)