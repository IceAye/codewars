function elementsSum(arr, d = 0) {
    let result = 0;
    for (let j = 0, i = arr.length - 1; j < arr.length, i >= 0; j++, i--) {
        if (arr[j][i] === undefined) {
            result += d;
        } else {
            result += arr[j][i];
        }
    }
    return result;
}

console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]), 16);
console.log(elementsSum([[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]]), 15);
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []]), 7);
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5), 12);
console.log(elementsSum([[3, 2], [4], []]), 0);