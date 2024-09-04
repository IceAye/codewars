function digPow(n, p){
    let digits = String(n).split('').map(item => +item)
    let sum = 0
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(digits[i], p)
        p +=1
    }

    return Number.isInteger(sum / n) ? sum / n : -1
}

console.log(digPow(89, 1))
console.log(digPow(92, 1))
console.log(digPow(46288, 3))
console.log(digPow(114, 3))