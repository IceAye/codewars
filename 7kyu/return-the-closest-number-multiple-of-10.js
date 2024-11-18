// ❓ DESCRIPTION:
// Given a number return the closest number to it that is divisible by 10.
//
// ✅ SOLUTION:
const closestMultiple10 = num => {
    return Math.round(num / 10) * 10;
};

// 📌 TESTCASE:
console.log(closestMultiple10(22)) // 20
console.log(closestMultiple10(25)) // 30
console.log(closestMultiple10(37)) // 40