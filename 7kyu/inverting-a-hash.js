// ❓ DESCRIPTION:
// Given a Hash made up of keys and values, invert the hash by swapping them.
//
// ✅ SOLUTION:
function invertHash(hash) {
    const obj = {};
    for (const key in hash) {
        obj[hash[key]] = key;
    }
    return obj;
}

// 📌 TESTCASE:
console.log(invertHash({ a: "1" })); // { 1: 'a' }
console.log(invertHash({ a: "1", b: "2", c: "3" })); // { 1: 'a', 2: 'b', 3: 'c' }
console.log(invertHash({ 1: "3" })); // { 3: '1' }
console.log(invertHash({ hello: "world", foo: "bar" })); // { world: 'hello', bar: 'foo' }