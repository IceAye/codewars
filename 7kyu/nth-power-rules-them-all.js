// ❓ DESCRIPTION:
// You are provided with an array of positive integers and an additional integer n (n > 1).
// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.
//
// ✅ SOLUTION:
function modifiedSum(a, n) {
    let plainSum = a.reduce((acc, curr) => acc + curr, 0);
    let powerSum = a.reduce((acc, curr) => acc + curr ** n, 0);
    return powerSum - plainSum;
}

// 📌 TESTCASE:
console.log(modifiedSum([1, 2, 3], 3)); // 30
console.log(modifiedSum([1, 2], 5)); // 30
