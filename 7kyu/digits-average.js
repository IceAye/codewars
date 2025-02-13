// ❓ DESCRIPTION:
// Given a non-negative integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.
// Note: if the average of two digits is not an integer, round the result up (e.g. the average of 8 and 9 will be 9)
//
// ✅ SOLUTION:
function digitsAverage(input) {
    if (input < 10) return input;
    let digits = Array.from(input.toString(), Number);
    let result = [];
    for (let i = 0; i < digits.length - 1; i++) {
        let mean = Math.ceil((digits[i] + digits[i + 1]) / 2);
        result.push(mean);
    }
    let newNumber = +result.join("");
    return digitsAverage(newNumber);
}

// 📌 TESTCASE:
console.log(digitsAverage(246)); // 4
console.log(digitsAverage(89)); // 9
console.log(digitsAverage(2)); // 2
console.log(digitsAverage(245)); // 4
console.log(digitsAverage(345)); // 5
console.log(digitsAverage(346)); // 5