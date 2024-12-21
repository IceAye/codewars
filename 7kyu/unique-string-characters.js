// ❓ DESCRIPTION:
// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
//
// ✅ SOLUTION:
function solve(a, b) {
    let string1 = a.split('').filter(v => !b.split('').includes(v)).join('');
    let string2 = b.split('').filter(v => !a.split('').includes(v)).join('');
    return string1 + string2;
}

// 📌 TESTCASE:
console.log(solve("xyab", "xzca")); // "ybzc"
console.log(solve("xyabb", "xzca")); // "ybbzc"
console.log(solve("abcd", "xyz")); // "abcdxyz"
console.log(solve("xxx", "xzca")); // "zca"