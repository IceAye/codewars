// ❓ DESCRIPTION:
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
// Note: no empty arrays will be given.
//
// ✅ SOLUTION:
function highestRank(arr) {
    let map = new Map();
    for (const item of arr) {
        map.set(item, (map.get(item) + 1) || 1)
    }
    let maxValue = Math.max(...map.values())
    return [...map].filter(item => item[1] === maxValue).sort((a, b) => b[0] - a[0])[0][0];
}

// 📌 TESTCASE:
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); // 3
console.log(highestRank( [1,2,3,4,5,6,7,8,9])); // 9
