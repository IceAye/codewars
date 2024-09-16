// ❓ DESCRIPTION:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// ✅ SOLUTION:
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}