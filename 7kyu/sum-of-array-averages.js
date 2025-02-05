const sumAverage = (arr) => {
    return Math.round(arr.reduce((acc, curr) => curr.reduce((acc, curr) => acc + curr, 0) / curr.length + acc, 0));
}

console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]])) // 44
console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]])) // -6