function tailSwap(arr) {
    let splitted = arr.map(item => item.split(":"));
    [splitted[0][0], splitted[0][1], splitted[1][0], splitted[1][1]] = [splitted[0][0], splitted[1][1], splitted[1][0], splitted[0][1]]
    return splitted.map(item => item.join(":"));
}

console.log(tailSwap(['abc:123', 'cde:456'])) // ['abc:456', 'cde:123']
console.log(tailSwap(['a:12345', '777:xyz'])) // ['a:xyz', '777:12345']

