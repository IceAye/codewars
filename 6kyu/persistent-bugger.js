function persistence( num ) {
    let count = 0
    while (num.toString().length !== 1) {
        num = num.toString().split('').reduce((total, element) => total * element)
        count++;
    }
    return count;
}

console.log(persistence(39))
console.log(persistence(4))
console.log(persistence(25))