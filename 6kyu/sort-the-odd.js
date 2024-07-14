// ❓ DESCRIPTION:
// You will be given an array of numbers.
// You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//
// 📌 EXAMPLES:
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
//
// ✅ SOLUTION:
function sortArray(array) {
    const odd = array.filter((item) => item % 2 !== 0)
    return array.map((item) => item % 2 === 0 ? item : odd.shift())
}

console.log('Output: ' , sortArray([5, 8, 6, 3, 4]))
console.log('Output: ' , sortArray([2, 22, 37, 11, 4, 1, 5, 0]))