// ❓ DESCRIPTION:
// Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
// Like this:
//
// n = 5
//
// [
//   '-----',
//   '-   -',
//   '-   -',
//   '-   -',
//   '-----'
// ]

// ✅ SOLUTION:
function box(n) {
    const result = [];
    result[0] = result[n - 1] = '-'.repeat(n);
    for (let i = 1; i < result.length - 1; i++) {
        let str = ' '.repeat(n - 2);
        result[i] = '-' + str + '-';
    }
    return result;
}

// 📌 TESTCASE:
console.log(box(5))
console.log(box(2))