function appendArrays (arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(appendArrays([1,2], [2,4]), [1,2,2,4])
console.log(appendArrays([1,2],[3,4]), [1,2,3,4])
console.log(appendArrays(['this'],['that']), ['this','that'])
console.log(appendArrays(['a','B'],['c','D']), ['a','B','c','D'])
console.log(appendArrays([1,2], [1]), [1,2,1])
console.log(appendArrays([['x','x'],'B'], ['c','D']), [['x','x'],'B','c','D'])