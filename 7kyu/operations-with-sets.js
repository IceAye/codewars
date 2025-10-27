// ❓ DESCRIPTION:
// We need a function that receives two arrays, each of them with elements that occur only once. We need to know:
//
// Number of elements that are present in both arrays
// Number of elements that are present in only one array
// Number of remaining elements in arr1 after extracting the elements of arr2
// Number of remaining elements in arr2 after extracting the elements of arr1

// ✅ SOLUTION:
function process2Arrays(arr1, arr2) {
    const result = [0, 0, 0, 0];
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    for (const item of set1) {
        if (set2.has(item)) {
            result[0]++;
        } else result[2]++;
    }
    for (const item of set2) {
        if (!set1.has(item)) result[3]++;
    }

    result[1] = result[2] + result[3];

    return result;
}

// 📌 TESTCASE:
console.log(process2Arrays(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 4, 6, 8, 10, 12, 14]
), [4, 8, 5, 3]);

console.log(process2Arrays(
    [1, 3, 5],
    [2, 4, 6]
), [0, 6, 3, 3]);

console.log(process2Arrays(
    [10, 20, 30],
    [10, 20, 30]
), [3, 0, 0, 0]);

console.log(process2Arrays(
    [],
    [1, 2, 3]
), [0, 3, 0, 3]);
