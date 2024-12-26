// ❓ DESCRIPTION:
// Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on
// your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on
// the original array. Your function should be pure, i.e. it should not mutate the input array.
//
// ✅ SOLUTION:
function bubblesortOnce(a) {
    let sorted = [...a];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] > sorted[i + 1]) {
            [sorted[i] , sorted[i + 1]] = [sorted[i + 1] , sorted[i]];
        }
    }
    return sorted;
}

// 📌 TESTCASE:
console.log(bubblesortOnce([9 , 7 , 5 , 3 , 1 , 2 , 4 , 6 , 8])); // [7, 5, 3, 1, 2, 4, 6, 8, 9]
