function uniqueSum(lst) {
    return lst.length
        ? [...new Set(lst)].reduce((acc, curr) => acc + curr, 0)
        : null;
}

console.log(uniqueSum([1, 2, 3])); // 6
console.log(uniqueSum([1, 3, 8, 1, 8])); // 12
console.log(uniqueSum([-1, -1, 5, 2, -7])); // -1
console.log(uniqueSum([])); // null