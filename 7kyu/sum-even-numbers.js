function sumEvenNumbers(input) {
    return input.reduce((acc, curr) => (curr % 2 === 0 ? curr : 0) + acc, 0)
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));