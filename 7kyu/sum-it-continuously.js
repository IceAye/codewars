function add(arr) {
    let result = [];

    for (const num of arr) {
        result.push(num + (result[result.length - 1] || 0));
    }

    return result;
}

console.log(add([0])); // [0]))
console.log(add([-33])); // [-33]))
console.log(add([32, -9, 2, 0])); // [32, 23, 25, 25]))
console.log(add([1, 2, 3, 4, 5])); // [1, 3, 6, 10, 15]))
console.log(add([2, 4, 6, 8, 10])); // [2, 6, 12, 20, 30]))
console.log(add([1, 8, 27, 64, 125])); // [1, 9, 36, 100, 225]))