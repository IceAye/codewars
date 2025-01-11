// ❓ DESCRIPTION:
// Implement function sequence, which returns new n-size Array filled according to pattern.
// pattern may be:
// a function that takes two: (element, index), one: (element) or any arguments (similar to map function), then filled running this function, in other words: function describes sequence,
// number, string or any other object, then filled by copying, this object n-times.
//
// ✅ SOLUTION:
function sequence(n, pattern) {
    return new Array(n)
        .fill(0)
        .map(typeof pattern === "function" ? pattern : () => pattern);;
}

// 📌 TESTCASE:
console.log(sequence(3, 4)); // [4, 4, 4]
console.log(sequence(3, "s")); // ['s', 's', 's']
console.log(sequence(5, [])); // [[], [], [], [], []]
console.log(sequence(5, (x, idx) => idx % 2)); // [0, 1, 0, 1, 0]
