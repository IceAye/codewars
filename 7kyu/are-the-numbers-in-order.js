// ❓ DESCRIPTION:
// In this Kata, your function receives an array of integers as input.
// Your task is to determine whether the numbers are in ascending order.
// An array is said to be in ascending order if there are no two adjacent integers
// where the left integer exceeds the right integer in value.
//
// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.
//
// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order
// since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.
//
// ✅ SOLUTION:
function inAscOrder( arr ) {
    return arr.toString() === arr.sort(( a , b ) => a - b).toString()
}

console.log(inAscOrder([1 , 2 , 4 , 7 , 19]))
console.log(inAscOrder([1 , 6 , 10 , 18 , 2 , 4 , 20]))