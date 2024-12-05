// ❓ DESCRIPTION:
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
//
// ✅ SOLUTION:
function smaller(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) count++;
        }
        result.push(count);
    }
    return result;
}

// 📌 TESTCASE:
console.log(smaller([5, 4, 3, 2, 1])) // [4, 3, 2, 1, 0]
console.log(smaller([1, 2, 3])) // [0, 0, 0]
console.log(smaller([1, 2, 0])) // [1, 1, 0]
console.log(smaller([1, 2, 1])) // [0, 1, 0]
console.log(smaller([1, 1, -1, 0, 0])) // [3, 3, 0, 0, 0]
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])) // [4, 1, 5, 5, 0, 0, 0, 0, 0]
