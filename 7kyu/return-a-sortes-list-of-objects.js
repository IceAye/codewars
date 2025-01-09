// ❓ DESCRIPTION:
// You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).
//
// ✅ SOLUTION:
function sortList (sortBy, list) {
    return list.sort((a, b) => b[sortBy] - a[sortBy]);
}

// 📌 TESTCASE:
console.log(sortList("a", [
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
])); // [{"a": 4, "b": 12},{"a": 3, "b": 2},{"a": 2, "b": 40},{"a": 1, "b": 3}]
console.log(sortList("b", [ { a: 2, b: 2 }, { a: 3, b: 40 }, { a: 1, b: 12 } ])) // [{"a":3,"b":40},{"a":1,"b":12},{"a":2,"b":2}]
