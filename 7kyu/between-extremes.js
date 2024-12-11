function betweenExtremes(numbers) {
    return Math.max(...numbers) -  Math.min(...numbers);
}

function betweenExtremes(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers.at(-1) - numbers[0];
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12])) // 42
console.log(betweenExtremes([-1, -41, -77, -100])) // 99