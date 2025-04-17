// ❓ DESCRIPTION:
// In this kata you will create a function to check a non-negative input to see if it is a prime number.
// The function will take in a number and will return True if it is a prime number and False if it is not.
// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//
// ✅ SOLUTION:
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.round(Math.sqrt(n)); i++) {
        if (n !== i && n % i === 0) return false;
    }
    return true;
}

// 📌 TESTCASE:
console.log(isPrime(0), false)
console.log(isPrime(1), false)
console.log(isPrime(2), true)
console.log(isPrime(11), true)
console.log(isPrime(12), false)
console.log(isPrime(61), true)
console.log(isPrime(571), true)
console.log(isPrime(573), false)
console.log(isPrime(25), false)