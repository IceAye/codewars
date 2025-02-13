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

console.log(digitsAverage(246)); // 4
console.log(digitsAverage(89)); // 9
console.log(digitsAverage(2)); // 2
console.log(digitsAverage(245)); // 4
console.log(digitsAverage(345)); // 5
console.log(digitsAverage(346)); // 5