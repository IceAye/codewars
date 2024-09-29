// ❓ DESCRIPTION:
// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.
//
// ✅ SOLUTION:
Math.roundTo = function (number, precision) {
    return +number.toFixed(precision)
}

// 📌 TESTCASE:
console.log(Math.roundTo(3.1415926535, 4));
console.log(Math.roundTo(4, 5));
console.log(Math.roundTo(4.1235343424, 6));