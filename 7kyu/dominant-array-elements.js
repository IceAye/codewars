function solve(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr.slice(i + 1).every((num) => num < arr[i])) result.push(arr[i]);
    }
    return [...result, arr.at(-1)];
}

console.log(solve([16,17,14,3,14,5,2])) // [17,14,5,2]
console.log(solve([92,52,93,31,89,87,77,105])) // [105]
console.log(solve([75,47,42,56,13,55])) // [75,56,55]
console.log(solve([67,54,27,85,66,88,31,24,49])) // [88,49]
console.log(solve([76,17,25,36,29])) // [76,36,29]
console.log(solve([104,18,37,9,36,47,28])) // [104,47,28]