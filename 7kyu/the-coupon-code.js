// ❓ DESCRIPTION:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date.
// All dates will be passed as strings in this format: "MONTH DATE, YEAR".
//
// ✅ SOLUTION:

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return Date.parse(expirationDate) >= Date.parse(currentDate) && enteredCode === correctCode
}
console.log('Output: ' , checkCoupon('123','123','September 5, 2014','October 1, 2014'))
console.log('Output: ' , checkCoupon('123a','123','September 5, 2014','October 1, 2014'))
