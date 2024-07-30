// ❓ DESCRIPTION:
// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.
//
// 📌 Example:
// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
//
// ✅ SOLUTION:
function keysAndValues(data) {
    return [Object.keys(data), Object.values(data)];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ 1: "a", 2: "b", 3: "c" }));
