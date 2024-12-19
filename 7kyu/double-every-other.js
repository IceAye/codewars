// ❓ DESCRIPTION:
// Write a function that doubles every second integer in a list, starting from the left.
//
// ✅ SOLUTION:
function doubleEveryOther(a) {
    return a.map((item, index) => (index % 2 === 1 ? item * 2 : item));
}

// 📌 TESTCASE:
console.log(doubleEveryOther([1, 2, 3, 4])); // [1,4,3,8]