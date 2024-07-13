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