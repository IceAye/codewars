function makeValley(arr) {
    let left = [];
    let right = [];

    arr.sort((a, b) => b - a);

    for (let i = 0; i < arr.length; i++) {
        i % 2 === 0 ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...left, ...right.reverse()];
}

console.log(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]), [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]);
console.log(makeValley([20, 7, 6, 2]), [20, 6, 2, 7]);
console.log(makeValley([14, 10, 8]), [14, 8, 10]);
console.log(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]), [20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18]);
console.log(makeValley([20, 16, 14, 10, 1]), [20, 14, 1, 10, 16]);
console.log(makeValley([19, 19, 18, 14, 12, 11, 9, 7, 4]), [19, 18, 12, 9, 4, 7, 11, 14, 19]);
console.log(makeValley([20, 18, 16, 15, 14, 14, 13, 13, 10, 9, 4, 4, 4, 1]), [20, 16, 14, 13, 10, 4, 4, 1, 4, 9, 13, 14, 15, 18]);
console.log(makeValley([20, 20, 16, 14, 12, 12, 11, 10, 3, 2]), [20, 16, 12, 11, 3, 2, 10, 12, 14, 20]);
console.log(makeValley([19, 17, 16, 15, 13, 8, 5, 5, 4, 4, 4]), [19, 16, 13, 5, 4, 4, 4, 5, 8, 15, 17]);
console.log(makeValley([19, 8, 6]), [19, 6, 8]);