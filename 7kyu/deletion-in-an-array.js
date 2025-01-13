// ❓ DESCRIPTION:
// The deleteValues function takes an array and removes elements that answer true to the pred function.
// For some reason, some of the elements of the array for which the predicate holds are not deleted...
// Can you fix the code?
//
// ✅ SOLUTION:
function deleteValues(array, pred) {
    for (let i = array.length; i >= 0; i--) {
        if (pred(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
}

// 📌 TESTCASE:
function isEven(n) {
    return n % 2 === 0;
}

console.log(deleteValues([1,3,2,4,5,7,6,8,10,9], isEven)) // [1,3,5,7,9]