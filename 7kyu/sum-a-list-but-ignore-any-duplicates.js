// ❓ DESCRIPTION:
// Please write a function that sums a list, but ignores any duplicated items in the list.
// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.
//
// ✅ SOLUTION 1:
function sumNoDuplicates(numList) {
    let map = new Map();
    for (const num of numList) {
        map.set(num, map.get(num) + 1 || 1)
    }

    return [...map.keys()].reduce((acc, curr) => {
        acc += map.get(curr) > 1 ? 0 : curr;
        return acc;
    }, 0);
}

// ✅ SOLUTION 2:
function sumNoDuplicates(numList) {
    return numList.reduce((acc, curr) => acc + (numList.indexOf(curr) === numList.lastIndexOf(curr) ? curr : 0), 0);
}

// 📌 TESTCASE:
console.log(sumNoDuplicates([1, 1, 2, 3])); // 5
console.log(sumNoDuplicates([])); // 0
console.log(sumNoDuplicates([1, 1, 2, 2, 3])); // 3
console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1])); // 21