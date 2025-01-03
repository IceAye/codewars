function catchSignChange(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        (arr[i] >= 0 && arr[i + 1] < 0) || (arr[i] < 0 && arr[i + 1] >= 0)
            ? count++
            : count;
    }
    return count;
}

console.log(catchSignChange([])); // 0
console.log(catchSignChange([1, 3, 4, 5])); // 0
console.log(catchSignChange([-1, -3, -4, -5])); // 0
console.log(catchSignChange([1, -3, -4, 0, 5])); // 2
console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77])); // 3