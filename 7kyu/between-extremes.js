// ❓ DESCRIPTION:
// Given an array of numbers, return the difference between the largest and smallest values.
// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
//
// ✅ SOLUTION 1:
function betweenExtremes(numbers) {
    return Math.max(...numbers) -  Math.min(...numbers);
}

// ✅ SOLUTION 2:
function betweenExtremes(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers.at(-1) - numbers[0];
}

// ✅ SOLUTION 3:
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

// 📌 TESTCASE:
console.log(betweenExtremes([21, 34, 54, 43, 26, 12])) // 42
console.log(betweenExtremes([-1, -41, -77, -100])) // 99