// ❓ DESCRIPTION:
// Jack really likes his number five:
// the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers.
//
// 📌 EXAMPLES:
//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)
//
// ✅ SOLUTION:
function multiply(number){
    return Math.pow(5, String(Math.abs(number)).length) * number
}

console.log('Output: ' , multiply(10))
console.log('Output: ' , multiply(5))
console.log('Output: ' , multiply(-3))