function isNice(arr) {
    if (arr.length === 0) return false;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) count++;
    }
    return count === arr.length;
}

console.log(isNice([2,10,9,3])) // true
console.log(isNice([3,4,5,7])) // false
console.log(isNice([])) // false