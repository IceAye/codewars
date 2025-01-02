function houseNumbersSum(inputArray) {
    let zeroIndex = inputArray.indexOf(0);
    let finalArray = inputArray.slice(0, zeroIndex);
    return finalArray.length === 0
        ? 0
        : finalArray.reduce((acc, curr) => acc + curr, 0);
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])); // 11
console.log(houseNumbersSum([4, 2, 1, 6, 0])); // 13
console.log(houseNumbersSum([4, 1, 2, 3, 0, 10, 2])); // 10
console.log(houseNumbersSum([0, 1, 2, 3, 4, 5])); // 0