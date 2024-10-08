// ❓ DESCRIPTION:
// Given two arrays a and b write a function comp(a, b) (or compSame(a, b)) that checks whether the two arrays
// have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears).
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
//
// ✅ SOLUTION:

let a1 = [121, 144, 19, 161, 19, 144, 19, 11]
let a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
function comp(array1, array2){
    return (array1 !== null || array2 !== null) && array1.sort().toString() === array2.map((item => Math.sqrt(item))).sort().toString()
}

console.log('Output: ' , comp(a1, a2))