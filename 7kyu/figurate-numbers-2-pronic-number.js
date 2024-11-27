// ❓ DESCRIPTION:
// You have to create a function isPronic to check whether the argument passed is a Pronic Number and return true if it is & false otherwise.
// Pronic Number -A pronic number, oblong number, rectangular number or heteromecic number, is a number which is the product of two consecutive integers, that is, n(n + 1).
//
// ✅ SOLUTION:
function isPronic(n){
    let i = 0;
    while (i <= n) {
        if (n === i * (i + 1)) return true;
        i++;
    }
    return false;
}

// 📌 TESTCASE:
console.log(isPronic(0)) // true
console.log(isPronic(1)) // false
console.log(isPronic(2)) // true
console.log(isPronic(3)) // false
console.log(isPronic(4)) // false
console.log(isPronic(5)) // false
console.log(isPronic(6)) // true
console.log(isPronic(-3)) // false
console.log(isPronic(-27)) // false