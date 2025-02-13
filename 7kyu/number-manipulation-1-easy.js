// ❓ DESCRIPTION:
// For a given large number (num), write a function which returns the number with the second half of digits changed to 0.
// In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.
// Example:
// 192827764920 --> 192827000000
// 938473 --> 938000
// 2837743 --> 2830000
//
// ✅ SOLUTION:
function manipulate(num) {
    let digits = Array.from(num.toString(), Number);
    let middle = Math.floor(digits.length / 2);
    while (middle < digits.length) {
        digits[middle] = 0;
        middle++;
    }
    return +digits.join("");
}

// 📌 TESTCASE:
console.log(manipulate(192827764920)); // 192827000000
console.log(manipulate(838473)); // 838000
console.log(manipulate(8173648710293847)); // 8173648700000000