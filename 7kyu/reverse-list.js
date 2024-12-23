// ❓ DESCRIPTION:
// Write reverseList function that simply reverses lists.
//
// ✅ SOLUTION 1:
function reverseList(arr) {
    return arr.reverse();
}

// ✅ SOLUTION 2:
function reverseList(arr) {
    let array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        array.push(arr[i]);
    }
    return array;
}