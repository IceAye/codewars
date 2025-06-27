function ArithmeticSequenceSum(a, r, n) {
    let result = a;
    let step = a;

    while (n > 1) {
        step += r;
        result += step;
        n--;
    }

    return result;
}

console.log(ArithmeticSequenceSum(3, 2, 20), 440);
console.log(ArithmeticSequenceSum(2, 2, 10), 110);
console.log(ArithmeticSequenceSum(1, -2, 10), -80);
console.log(ArithmeticSequenceSum(2, 3, 5), 40);
