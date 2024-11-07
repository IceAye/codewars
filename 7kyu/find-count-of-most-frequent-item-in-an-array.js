// ❓ DESCRIPTION:
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
//
// ✅ SOLUTION:
function mostFrequentItemCount(collection) {
    let hashMap = new Map();
    collection.map(item => hashMap.set(item, hashMap.get(item) + 1 || 1));
    return Math.max(...hashMap.values()) | 0;
}

// 📌 TESTCASE:
console.log(mostFrequentItemCount([3, -1, -1])) // 2
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])) // 5
console.log(mostFrequentItemCount([])) // 0
