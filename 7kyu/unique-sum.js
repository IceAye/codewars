// ❓ DESCRIPTION:
// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.
//
// ✅ SOLUTION:
function uniqueSum(lst) {
    return lst.length
        ? [...new Set(lst)].reduce((acc, curr) => acc + curr, 0)
        : null;
}

// 📌 TESTCASE:
console.log(uniqueSum([1, 2, 3])); // 6
console.log(uniqueSum([1, 3, 8, 1, 8])); // 12
console.log(uniqueSum([-1, -1, 5, 2, -7])); // -1
console.log(uniqueSum([])); // null