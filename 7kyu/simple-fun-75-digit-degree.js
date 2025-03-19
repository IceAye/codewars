// ❓ DESCRIPTION:
// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
// Given an integer n, find its digit degree.
//
// ✅ SOLUTION:
function digitDegree(n) {
    let i = 0;

    while (n >= 10) {
        n = Array.from(n.toString(), Number).reduce((acc, curr) => acc + curr, 0);
        i++;
    }

    return i;
}

// 📌 TESTCASE:
console.log(digitDegree(5)) // 0
console.log(digitDegree(100)) // 1
console.log(digitDegree(91)) // 2
console.log(digitDegree(99)) // 2
console.log(digitDegree(1234567)) // 3
console.log(digitDegree(1000000000)) // 1
