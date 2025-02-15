// ❓ DESCRIPTION:
// You have read the title: you must guess a sequence. It will have something to do with the number given.
//
// Example
// x = 16
// result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
// Good luck!
//
// ✅ SOLUTION:
function sequence(x) {
    let result = [];
    let i = 1;
    while (i <= x) {
        result.push(i);
        i++;
    }
    return result.sort();
}

// 📌 TESTCASE:
console.log(sequence(15)) // [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sequence(9)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
