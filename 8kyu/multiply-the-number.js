function multiply(number){
    return Math.pow(5, String(Math.abs(number)).length) * number
}

console.log('Output: ' , multiply(10))
console.log('Output: ' , multiply(5))
console.log('Output: ' , multiply(-3))