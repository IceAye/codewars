// ❓ DESCRIPTION:
// Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.
// The inputs will always be two positive integers between 2 and 99.
//
// ✅ SOLUTION:
function isCoprime(x, y) {
    let max = Math.max(x, y);
    for (let i = 2; i <= max; i++) {
        if ( x % i === 0 && y % i === 0) return false;
    }
    return true;
}

// 📌 TESTCASE:
console.log(isCoprime(20, 27), true)
console.log(isCoprime(12, 39), false)