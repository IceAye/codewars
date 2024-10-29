function averages(numbers) {
    if (!Array.isArray(numbers) || numbers.length < 2) return [];
    let result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        result.push((numbers[i] + numbers[i + 1]) / 2);
    }
    return result;
}

console.log(averages([2, 2, 2, 2, 2])); // [2, 2, 2, 2]
console.log(averages([2, -2, 2, -2, 2])); // [0, 0, 0, 0]
console.log(averages([1, 3, 5, 1, -10])); // [2, 4, 3, -4.5]
console.log(averages(null)); // []
