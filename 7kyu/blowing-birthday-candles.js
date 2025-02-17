function blowCandles( str ) {
    let arr = str.split('').map(( item ) => +item);
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count += arr[i]
            arr[i + 1] -= arr[i]
            arr[i + 2] -= arr[i]
        }
    }

    return count
}