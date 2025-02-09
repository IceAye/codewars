// ❓ DESCRIPTION:
// You are given an initial 2-value array (x). You will use this to calculate a score.
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
//
// ✅ SOLUTION:
function explode(x) {
    if (typeof x[0] === typeof x[1]) {
        return typeof x[0] === "string" ? "Void!" : new Array(x[0] + x[1]).fill(x);
    }
    return new Array(typeof x[0] === "number" ? x[0] : x[1]).fill(x);
}

// 📌 TESTCASE:
console.log(explode([9, 3])); // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9,
// 3], [9, 3]]
console.log(explode(["a", 3])); // [['a', 3], ['a', 3], ['a', 3]]
console.log(explode([6, "c"])); // [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
console.log(explode(["a", "b"])); // 'Void!'
console.log(explode(["a", 0])); // []
