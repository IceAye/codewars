// ❓ DESCRIPTION:
// ###Lucky number
// Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
// 1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.
// Function will return true for lucky numbers and false for others.
//
// ✅ SOLUTION:
function isLucky(n) {
    return n % 9 === 0;
}

// 📌 TESTCASE:
console.log(isLucky(1892376)); // true
console.log(isLucky(189237)); // false
console.log(isLucky(1098)); // true
console.log(isLucky(22869)); // true
console.log(isLucky(0)); // true