let countBits = function(n) {
    return n.toString(2).split('').reduce((sum, current) => +sum + +current, 0)
}

console.log(countBits(4))
console.log(countBits(26))
console.log(countBits(77231418))