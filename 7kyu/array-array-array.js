function explode(x) {
    if (typeof x[0] === typeof x[1]) {
        return typeof x[0] === "string" ? "Void!" : new Array(x[0] + x[1]).fill(x);
    }
    return new Array(typeof x[0] === "number" ? x[0] : x[1]).fill(x);
}

console.log(explode([9, 3])); // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9,
// 3], [9, 3]]
console.log(explode(["a", 3])); // [['a', 3], ['a', 3], ['a', 3]]
console.log(explode([6, "c"])); // [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
console.log(explode(["a", "b"])); // 'Void!'
console.log(explode(["a", 0])); // []
