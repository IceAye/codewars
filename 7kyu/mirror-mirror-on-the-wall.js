function mirror(data) {
    let sorted = [...data].sort((a, b) => a - b);
    return [ ...sorted.slice(0, -1), ...sorted.reverse() ];
}

console.log(mirror( [])) // []
console.log(mirror( [1])) // [1]
console.log(mirror([2, 1])) // [1, 2, 1]
console.log(mirror( [2, 3, 1])) // [1, 2, 3, 2, 1]
console.log(mirror( [-8, 42, 18, 0, -16])) // [-16, -8, 0, 18, 42, 18, 0, -8, -16]