// ❓ DESCRIPTION:
// Find the sum of all multiples of n below m
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
//
// 📌 EXAMPLES:
// Input: (2, 9) ==> 2 + 4 + 6 + 8 Output: 20
// Input: (3, 13) ==> 3 + 6 + 9 + 12 Output: 30
// Input: (4, 123) ==> 4 + 8 + 12 + ... Output: 1860
// Input: (4, -7) ==> Output: "INVALID"
//
// ✅ SOLUTION:

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