function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((sum, current) => +sum + +current, 0)
}
console.log('Output: ' , sumDigits(0))
console.log('Output: ' , sumDigits(99))
console.log('Output: ' , sumDigits(-32))