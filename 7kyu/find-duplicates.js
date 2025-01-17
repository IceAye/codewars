function duplicates(arr) {
    let result = [];
    let prefix = [];

    for (const item of arr) {
        if (prefix.includes(item) && !result.includes(item)) {
            result.push(item);
        }
        prefix.push(item);
    }

    return result;
}

function duplicates(arr) {
    return [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))];
}

console.log(duplicates([1, 2, 3, 4, 5])); // []
console.log(duplicates([])); // []
console.log(duplicates(["no", "duplicates", "here"])); // []
console.log(duplicates([1, 2, 3, 4, 3])); // [3]
console.log(duplicates([1, 2, 3, 3, 2, 1])); // [3, 2, 1]
console.log(duplicates([1, 2, 1, 2, 1, 2, 1])); // [1, 2]
console.log(duplicates([1, 2, 3, 4, "3"])); // []
console.log(duplicates(["1", 2, 3, 3, "2", 1])); // [3]
console.log(duplicates(["zut", "alors", 1, 2, 4, 4, 3, 3, "1", 5, 3, "zut"])); // [4, 3, 'zut']
