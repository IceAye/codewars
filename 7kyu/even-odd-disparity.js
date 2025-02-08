// ❓ DESCRIPTION:
// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.
// The input will be an array of lowercase letters and numbers only.
//
// ✅ SOLUTION:
function solve(a) {
    let even = 0;
    let odd = 0;

    for (const el of a) {
        if (el % 2 === 0) even++;
        if (el % 2 === 1) odd++
    }
    return even - odd;
}

// 📌 TESTCASE:
console.log(solve([0,1,2,3])) // 0
console.log(solve([0,1,2,3,'a','b'])) // 0
console.log(solve([0, 15,'z',16,'m', 13, 14,'c', 9, 10, 13,'u', 4, 3])) // 0
console.log(solve([13, 6, 8, 15, 4, 8, 13])) // 1
console.log(solve([1,'a', 17, 8,'e', 3,'i', 12, 1])) // -2
console.log(solve([5, 15, 16, 10, 6, 4, 16, 't', 13, 'n', 14, 'k', 'n', 0, 'q', 'd', 7, 9])) // 2