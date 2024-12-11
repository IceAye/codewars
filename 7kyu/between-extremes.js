function betweenExtremes(numbers) {
    return Math.max(...numbers) -  Math.min(...numbers);
}

function betweenExtremes(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers.at(-1) - numbers[0];
}

function betweenExtremes(numbers) {
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        if (currentNumber >= max) {
            max = currentNumber;
        } else if (currentNumber <= min) {
            min = currentNumber;
        }
    }
    return max - min;
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12])) // 42
console.log(betweenExtremes([-1, -41, -77, -100])) // 99