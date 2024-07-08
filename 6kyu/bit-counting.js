let countBits = function(n) {
    return n.toString(2).split('').reduce((sum, current) => +sum + +current, 0)
}