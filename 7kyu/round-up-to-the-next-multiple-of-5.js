// ❓ DESCRIPTION:
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
// Input may be any positive or negative integer (including 0).
// You can assume that all inputs are valid integers.
//
// ✅ SOLUTION:
function roundToNext5(n){
    return Math.ceil(n / 5) * 5;
}

console.log(roundToNext5(2))
console.log(roundToNext5(-2))
console.log(roundToNext5(12))