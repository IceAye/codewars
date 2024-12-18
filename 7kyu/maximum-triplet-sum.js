// ❓ DESCRIPTION:
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// Array/list size is at least 3 .
// Array/list numbers could be a mixture of positives , negatives and zeros .
// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
//
// ✅ SOLUTION:
function maxTriSum(numbers) {
    return [...new Set(numbers)]
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((acc, curr) => acc + curr, 0);
}

// 📌 TESTCASE:
console.log(maxTriSum([3,2,6,8,2,3])) // 17
console.log(maxTriSum([2,9,13,10,5,2,9,5])) // 32
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4])) // 18
console.log(maxTriSum([-3,-27,-4,-2,-27,-2])) // -9
console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12])) // -33
console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67])) // 232
console.log(maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29])) // 41
console.log(maxTriSum([-2,0,2])) // 0
console.log(maxTriSum([-2,-4,0,-9,2])) // 0
console.log(maxTriSum([-5,-1,-9,0,2])) // 1
