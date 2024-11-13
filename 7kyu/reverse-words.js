function reverseWords(str) {
    let arr = str.split(' ')
    let arrReverse = []
    for (let i = 0; i < arr.length; i++) {
        arrReverse.push(arr[i].split('').reverse().join(''))
    }
    return arrReverse.join(' ')
}