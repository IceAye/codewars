// ❓ DESCRIPTION:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// Division by zero should return NaN.
//
// ✅ SOLUTION:
function remainder(n, m){
    return n < m ? m % n : n % m
}