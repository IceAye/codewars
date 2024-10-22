// ❓ DESCRIPTION:
// Given a positive integer n, calculate the following sum:
// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
//
// ✅ SOLUTION:
function halvingSum(n) {
    let count = n;
    while (n > 0) {
        n = Math.floor(n / 2);
        count += n;
    }
    return count;
}

// 📌 TESTCASE:
console.log(halvingSum(25))
console.log(halvingSum(127))
