function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return Date.parse(expirationDate) >= Date.parse(currentDate) && enteredCode === correctCode
}
console.log('Output: ' , checkCoupon('123','123','September 5, 2014','October 1, 2014'))
console.log('Output: ' , checkCoupon('123a','123','September 5, 2014','October 1, 2014'))
