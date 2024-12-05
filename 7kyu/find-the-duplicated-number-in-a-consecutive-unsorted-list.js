function findDup(arr) {
    let set = new Set(arr);
    return arr.reduce((acc, curr) => acc + curr) - [...set].reduce((acc, curr) => acc + curr);
}

console.log(findDup([1,2,2,3])) // 2
console.log(findDup([1,3,2,5,4,5,7,6])) // 5
