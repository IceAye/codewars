function sumNoDuplicates(numList) {
    let map = new Map();
    for (const num of numList) {
        map.set(num, map.get(num) + 1 || 1)
    }

    return [...map.keys()].reduce((acc, curr) => {
        acc += map.get(curr) > 1 ? 0 : curr;
        return acc;
    }, 0);
}

console.log(sumNoDuplicates([1, 1, 2, 3])); // 5
console.log(sumNoDuplicates([])); // 0
console.log(sumNoDuplicates([1, 1, 2, 2, 3])); // 3
console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1])); // 21