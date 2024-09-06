// ❓ DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// ✅ SOLUTION:
function countSheeps(sheep) {
    return sheep.reduce((sum, current) => sum + (current == true ? 1 : 0), 0);
}

console.log(countSheeps([undefined,null,false,true]))
console.log(countSheeps([undefined]))
console.log(countSheeps([true]))