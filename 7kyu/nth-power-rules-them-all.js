function modifiedSum(a, n) {
    let plainSum = a.reduce((acc, curr) => acc + curr, 0);
    let powerSum = a.reduce((acc, curr) => acc + curr ** n, 0);
    return powerSum - plainSum;
}

console.log(modifiedSum([1, 2, 3], 3)); // 30
console.log(modifiedSum([1, 2], 5)); // 30
