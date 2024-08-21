// ❓ DESCRIPTION:
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
// Note: You will always be given a non-empty list containing positive values.
//
// ENJOY CODING :)
//
// ✅ SOLUTION:
function sumOfMinimums(arr) {
    return arr.reduce((sum, current) => sum + Math.min(...current), 0);
}

console.log(
    sumOfMinimums([
        [7, 9, 8, 6, 2],
        [6, 3, 5, 4, 3],
        [5, 8, 7, 4, 5],
    ]),
);
console.log(
    sumOfMinimums([
        [11, 12, 14, 54],
        [67, 89, 90, 56],
        [7, 9, 4, 3],
        [9, 8, 6, 7],
    ]),
);
