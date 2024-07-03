function sumMul(n,m){
    let result = 0
    for (let i = 0; (i * n) <m; i++) {
        result += i * n
    }
    return result > 0 ? result : 'INVALID'
}
console.log('Output: ' , sumMul(0,0))
console.log('Output: ' , sumMul(2,9))
console.log('Output: ' , sumMul(4,-7))