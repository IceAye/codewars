// ❓ DESCRIPTION:
// Write a function that returns only the decimal part of the given number.
// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.
//
// ✅ SOLUTION 1:
function getDecimal(n){
    let result = '.' + n.toString().split('.')[1];
    return +result || 0;
}

// ✅ SOLUTION 2:
function getDecimal(n){
    return Math.abs(n % 1);
}

// 📌 TESTCASE:
console.log(getDecimal(10)) // 0
console.log(getDecimal(-1.2)) // 0.2
console.log(getDecimal(4.5)) // 0.5
console.log(getDecimal(111.5)) // 0.5