// ❓ DESCRIPTION:
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
//
// ✅ SOLUTION:

function angle(n) {
    return 180 * (n - 2)
}

console.log(angle(3))
console.log(angle(4))