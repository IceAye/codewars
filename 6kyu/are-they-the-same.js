let a1 = [121, 144, 19, 161, 19, 144, 19, 11]
let a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
function comp(array1, array2){
    return (array1 !== null || array2 !== null) && array1.sort().toString() === array2.map((item => Math.sqrt(item))).sort().toString()
}

console.log('Output: ' , comp(a1, a2))