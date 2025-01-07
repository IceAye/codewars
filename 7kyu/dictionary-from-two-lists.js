function createDict(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i] || null;
        if (values[i] === "" || values[i] === false || values[i] === 0) {
            obj[keys[i]] = values[i];
        }
    }
    return obj;
}

console.log(createDict(["a", "b", "c"], [1, 2, 3])); //, {'a': 1, 'b': 2, 'c': 3}
console.log(createDict(["a", "b", "c"], [1, 2, 3, 4])); //, {'a': 1, 'b': 2, 'c': 3}
console.log(createDict(["a", "b", "c", "d"], [1, 2, 3])); //, {'a': 1, 'b': 2, 'c': 3, 'd':null}
console.log(createDict(["a", "b", "c"], [0, "", false])); //, { a: 0, b: '', c: false }