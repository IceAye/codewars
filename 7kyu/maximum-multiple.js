// ❓ DESCRIPTION:
// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.
//
// ✅ SOLUTION:
function maxMultiple(divisor, bound){
    for (let i = bound; i <= bound; i--) {
        if ( i % divisor === 0 ) { return i}
    }
}
console.log('Output: ' , maxMultiple(2,7))
console.log('Output: ' , maxMultiple(3,10))