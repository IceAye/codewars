function findMissing(arr1, arr2) {
    return arr1.reduce((acc, curr) => acc + curr, 0) - arr2.reduce((acc, curr) => acc + curr, 0);
}

console.log(findMissing([1, 2, 3], [1, 3])) // 2
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])) // 8
console.log(findMissing([7], [])) // 7
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4])) // 3
console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0])) // 0
