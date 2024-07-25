function minValue(values) {
    return +[...new Set(values)].sort().join("");
}

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([4, 8, 1, 4]));
console.log(minValue([5, 6, 9, 9, 7, 6, 4]));