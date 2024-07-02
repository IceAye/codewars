// ❓ DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array in descending order.
//
// 📌 EXAMPLE:
// Input = [2, 1, 10] Output = 9
//
// ✅ SOLUTION:
function sumOfDifferences(arr) {
    let reversed = arr.sort((a, b) => b - a)
    let result = []
    for (let i = 0; i < reversed.length - 1; i++) {
        result.push(reversed[i] - reversed[i + 1])
    }
    return arr.length > 1 ? result.reduce((sum, current) => sum + current) : 0
}

console.log('Output: ', sumOfDifferences([2, 1, 10]))