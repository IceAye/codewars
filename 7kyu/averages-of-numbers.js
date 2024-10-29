// ❓ DESCRIPTION:
// #Get the averages of these numbers
// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
// If the array has 0 or 1 values or is null, your method should return an empty array.
//
// ✅ SOLUTION:
function averages(numbers) {
    if (!Array.isArray(numbers) || numbers.length < 2) return [];
    let result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        result.push((numbers[i] + numbers[i + 1]) / 2);
    }
    return result;
}

// 📌 TESTCASE:
console.log(averages([2, 2, 2, 2, 2])); // [2, 2, 2, 2]
console.log(averages([2, -2, 2, -2, 2])); // [0, 0, 0, 0]
console.log(averages([1, 3, 5, 1, -10])); // [2, 4, 3, -4.5]
console.log(averages(null)); // []
