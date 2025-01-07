// ❓ DESCRIPTION:
// There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of
// values.
// Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there
// are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the
// rest of values.
//
// ✅ SOLUTION:
function createDict(keys , values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i] || null;
        if (values[i] === "" || values[i] === false || values[i] === 0) {
            obj[keys[i]] = values[i];
        }
    }
    return obj;
}

// 📌 TESTCASE:
console.log(createDict(["a" , "b" , "c"] , [1 , 2 , 3])); //, {'a': 1, 'b': 2, 'c': 3}
console.log(createDict(["a" , "b" , "c"] , [1 , 2 , 3 , 4])); //, {'a': 1, 'b': 2, 'c': 3}
console.log(createDict(["a" , "b" , "c" , "d"] , [1 , 2 , 3])); //, {'a': 1, 'b': 2, 'c': 3, 'd':null}
console.log(createDict(["a" , "b" , "c"] , [0 , "" , false])); //, { a: 0, b: '', c: false }