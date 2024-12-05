function findDup(arr) {
    let set = new Set(arr);
    return arr.reduce((acc, curr) => acc + curr) - [...set].reduce((acc, curr) => acc + curr);
}

function findDup(arr){
    return arr.find(item => arr.indexOf(item) !== arr.lastIndexOf(item));
}

console.log(findDup([1,2,2,3])) // 2
console.log(findDup([1,3,2,5,4,5,7,6])) // 5
