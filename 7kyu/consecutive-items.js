function consecutive(arr, a, b) {
    let index = arr.indexOf(a);
    return arr[index + 1] === b || arr[index - 1] === b;
}


console.log(consecutive([1, 3, 5, 7], 3, 7)) // false
console.log(consecutive([1, 3, 5, 7], 3, 1)) // true
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4)) // true
