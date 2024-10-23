// ❓ DESCRIPTION:
// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
//
// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
//
// ✅ SOLUTION:
function findDigit(num, nth) {
    if (nth <= 0) return -1;
    let number = Array.from(Math.abs(num).toString(), Number).reverse()[nth - 1];
    return Array.from(Math.abs(num).toString(), Number).reverse()[nth - 1] || 0;
}

// 📌 TESTCASE:
console.log(findDigit(5673, 4)) // 5
console.log(findDigit(129, 2)) // 2
console.log(findDigit(-2825, 3)) // 8
console.log(findDigit(0, 20)) // 0
console.log(findDigit(65, 0)) // -1