function mergeArrays(a, b) {
    return [...new Set([...a, ...b])].sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeArrays([2, 4, 8], [2, 4, 6]));
