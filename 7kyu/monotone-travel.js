const isMonotone = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
};

console.log(isMonotone([1, 2, 3, 3, 4, 5]));
console.log(isMonotone([5, 5, 5, 5]));
console.log(isMonotone([1, 2, 3, 5]));
console.log(isMonotone([5, 4, 3, 1]));
console.log(isMonotone([1, 4, 5, 1]));
