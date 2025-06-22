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

function elementsSum(arr, d = 0) {
    return arr.reduce((acc, curr, ind) => {
        const num = curr[arr.length - 1 - ind];
        acc += num === undefined ? d : num;
        return acc;
    }, 0);
}

console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]), 16);
console.log(elementsSum([[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]]), 15);
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []]), 7);
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5), 12);
console.log(elementsSum([[3, 2], [4], []]), 0);