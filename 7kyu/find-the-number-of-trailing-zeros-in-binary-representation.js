// ❓ DESCRIPTION:
// Given a number n, find the number of trailing zeros in its binary representation.
//
// Examples:
// 4  ->  2, because 4 is represented as 100
// 5  ->  0, because 5 is represented as 101

// ✅ SOLUTION:
function trailingZeros(n) {
    const binaryString = n.toString(2);
    if (!binaryString.endsWith("0")) return 0;
    let sum = 0;
    for (let i = binaryString.length - 1; i >= 0; i--) {
        if (binaryString[i] !== "0") {
            break
        }
        sum++;
    }
    return sum;
}

// 📌 TESTCASE:
console.log(trailingZeros(4), 2);
console.log(trailingZeros(5), 0);
console.log(trailingZeros(32), 5);
console.log(trailingZeros(25), 0);
console.log(trailingZeros(158), 1);
