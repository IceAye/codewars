function repeats(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) + 1) || 1)
    }

    let count = 0;
    for (const item of map.entries()) {
        if (item[1] === 1) count += item[0]
    }

    return count
}

console.log(repeats([4, 5, 7, 5, 4, 8]));
console.log(repeats([9, 10, 19, 13, 19, 13]));
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
