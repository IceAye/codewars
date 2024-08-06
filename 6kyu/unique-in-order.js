let uniqueInOrder = function ( iterable ) {
    let arr = []
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            arr.push(iterable[i])
        }
    }
    return arr
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,3,3]))