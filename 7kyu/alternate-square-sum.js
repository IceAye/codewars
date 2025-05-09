function alternateSqSum(arr){
    return arr.length ? arr.reduce((acc, curr, ind) => acc + (ind % 2 === 0 ? curr : curr**2), 0) : 0
}

console.log(alternateSqSum([]),0)
console.log(alternateSqSum([1,2,3,4,5]),29)
console.log(alternateSqSum([-1,0,-3,0,-5,3]),0)
console.log(alternateSqSum([-1,2,-3,4,-5]),11)