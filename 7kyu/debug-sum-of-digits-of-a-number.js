function getSumOfDigits(integer) {
    let sum = 0
    let digits =  integer.toString();
    for(let i = 0; i < digits.length; i++) {
        sum += +digits[i]
    }
    return sum
}
console.log('Output: ' , getSumOfDigits(123))
console.log('Output: ' , getSumOfDigits(223))