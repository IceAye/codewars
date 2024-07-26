function deleteNth(arr, n) {
    for (let i = 0; i <= arr.length; i++) {
        while (arr.filter((item) => item === arr[i]).length > n) {
            arr.splice(arr.lastIndexOf(arr[i]), 1);
        }
    }
    return arr;
}

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1));