function manipulate(num) {
    let digits = Array.from(num.toString(), Number);
    let middle = Math.floor(digits.length / 2);
    while (middle < digits.length) {
        digits[middle] = 0;
        middle++;
    }
    return +digits.join("");
}

console.log(manipulate(192827764920)); // 192827000000
console.log(manipulate(838473)); // 838000
console.log(manipulate(8173648710293847)); // 8173648700000000