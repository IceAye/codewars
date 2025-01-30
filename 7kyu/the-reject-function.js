// ❓ DESCRIPTION:
// Implement a function which filters out array values which satisfy the given predicate.
//
// ✅ SOLUTION:
function reject(array, predicate) {
    return array.filter((item) => !predicate(item));
}

// 📌 TESTCASE:
console.log(reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })) // [1, 3, 5]