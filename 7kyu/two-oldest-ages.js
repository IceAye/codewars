// ❓ DESCRIPTION:
// The two oldest ages function/method needs to be completed.
// It should take an array of numbers as its argument and return the two highest numbers within the array.
// The returned value should be an array in the format [second oldest age,  oldest age].
// The order of the numbers passed in could be any order. The array will always include at least 2 items.
// If there are two or more oldest age, then return both of them in array format.
//
// 📌 EXAMPLES:
// Input = [1, 2, 10, 8] Output = [8, 10]
// Input = [1, 5, 87, 45, 8, 8] Output = [45, 87]
// Input = [1, 3, 10, 0]) Output = [3, 10]
//
// ✅ SOLUTION:
function twoOldestAges( ages ) {
    return ages.sort(( a , b ) => a - b).slice(-2)
}

console.log('Output: ' , twoOldestAges([1 , 2 , 10 , 8]))
console.log('Output: ' , twoOldestAges([1 , 5 , 87 , 45 , 8 , 8]))
console.log('Output: ' , twoOldestAges([1 , 3 , 10 , 0]))