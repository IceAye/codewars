// ❓ DESCRIPTION:
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
// Notes:
// List size is at least 3.
// All numbers will be positive.
// Numbers could occur more than once , (Duplications may exist).
// Threshold K will always be reachable.
//
// ✅ SOLUTION:
function minimumSteps(numbers, value){
    numbers.sort((a, b) => a - b)
    let sum = numbers[0];

    let i = 0
    while (sum < value) {
        sum += numbers[i + 1];
        i++;
    }
    return i;
}

// 📌 TESTCASE:
console.log(minimumSteps([4, 6, 3], 7)) // 1
console.log(minimumSteps([10, 9, 9, 8], 17)) // 1
console.log(minimumSteps([8, 9, 10, 4, 2], 23)) // 3
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)) // 8
console.log(minimumSteps([4, 6, 3], 2)) // 0