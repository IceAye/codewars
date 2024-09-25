// ❓ DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order.
//
// ✅ SOLUTION:
function grow(x){
    return x.reduce((product, factor) => product * factor);
}