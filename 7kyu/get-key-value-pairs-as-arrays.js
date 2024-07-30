function keysAndValues(data) {
    return [Object.keys(data), Object.values(data)];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ 1: "a", 2: "b", 3: "c" }));
