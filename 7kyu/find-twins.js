function elimination(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) return arr[i];
    }
    return null;
}

console.log(elimination([2,5,34,1,22,1])) // 1
console.log(elimination([2,2,34,1,22])) // 2
console.log(elimination([2,5,34,1,22])) // null