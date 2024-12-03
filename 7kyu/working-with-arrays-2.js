function removeNthElement(arr, n) {
    let copy = [...arr];
    copy.splice(n, 1);
    return copy;
}

console.log(removeNthElement([1, 2, 3, 4, 5], 4)) // [1, 2, 3, 4]
console.log(removeNthElement([9, 7, 6, 9], 0)) // [7, 6, 9]
console.log(removeNthElement([1,2,3,4,5], 1)) // [ 1, 3, 4, 5 ]