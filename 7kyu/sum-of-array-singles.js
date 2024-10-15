// SOLUTION 1:
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

// SOLUTION 2:
function repeats(arr){
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item)).reduce((acc, curr) => acc + curr, 0);
}

// SOLUTION 3:
function repeats(arr) {
    let set = new Set();
    let count = 0;

    for (const item of arr) {
        if (!set.has(item)) {
            set.add(item);
            count += item;
        } else {
            count -= item;
        }
    }

    return count;
}

console.log(repeats([4, 5, 7, 5, 4, 8]));
console.log(repeats([9, 10, 19, 13, 19, 13]));
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
