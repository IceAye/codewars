// ❓ DESCRIPTION:
// In this kata the function returns an array/list like the one passed to it but with its nth element removed (with 0 <= n <= array/list.length - 1). The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.
// Good luck!
//
// ✅ SOLUTION:
function removeNthElement(arr, n) {
    let copy = [...arr];
    copy.splice(n, 1);
    return copy;
}

// 📌 TESTCASE:
console.log(removeNthElement([1, 2, 3, 4, 5], 4)) // [1, 2, 3, 4]
console.log(removeNthElement([9, 7, 6, 9], 0)) // [7, 6, 9]
console.log(removeNthElement([1,2,3,4,5], 1)) // [ 1, 3, 4, 5 ]