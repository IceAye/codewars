function deepCount(a) {
    let count = a.length;
    for (const item of a) {
        if (Array.isArray(item)) {
            count += deepCount(item);
        }
    }
    return count;
}

console.log(deepCount([])) // 0
console.log(deepCount([1, 2, 3])) // 3
console.log(deepCount(["x", "y", ["z"]])) // 4
console.log(deepCount([1, 2, [3, 4, [5]]])) // 7
console.log(deepCount([[[[[[[[[]]]]]]]]])) // 8