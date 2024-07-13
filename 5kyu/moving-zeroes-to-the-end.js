// ❓ DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//
// ✅ SOLUTION:
function moveZeros(arr) {
    let arrSorted = []
    let arrZero = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arrSorted.push(arr[i])
        } else arrZero.push(arr[i])
    }
    return arrSorted.concat(arrZero)
}


console.log('Output: ' , moveZeros([1,2,0,1,0,1,0,3,0,1]))
console.log('Output: ' , moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]))