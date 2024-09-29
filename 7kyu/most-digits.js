function findLongest(array){
    return array.reduce((prev, curr) => prev.toString().length >= curr.toString().length ? prev : curr )
}

console.log(findLongest([1, 10, 100]));
console.log(findLongest([9000, 8, 800]));
console.log(findLongest([8, 900, 500]));