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