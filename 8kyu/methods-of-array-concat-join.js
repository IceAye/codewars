function bigToSmall(arr){
    let result = [].concat(...arr)
    return result.sort((a, b) => b - a).join(">")
}

console.log(bigToSmall([[1,2],[3,4],[5,6]]))
console.log(bigToSmall([[1,3,5],[2,4,6]]))
console.log(bigToSmall([[1,1],[1],[1,1]]))