// ❓ DESCRIPTION:
// An element is leader if it is greater than The Sum all the elements to its right side.
// Given an array/list [] of integers , Find all the LEADERS in the array.
// Array/list size is at least 3 .
// Array/list's numbers Will be mixture of positives , negatives and zeros
// Repetition of numbers in the array/list could occur.
// Returned Array/list should store the leading numbers in the same order in the original array/list.
//
// ✅ SOLUTION 1:
function arrayLeaders(numbers){
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.slice(i + 1).reduce((acc, curr) => acc + curr, 0) < numbers[i]) result.push(numbers[i]);
    }
    return result;
}

// ✅ SOLUTION 2:
function arrayLeaders(numbers){
    return numbers.filter((item, index) => numbers.slice(index + 1).reduce((acc, curr) => acc + curr, 0) < item);
}

// 📌 TESTCASE:
console.log(arrayLeaders([1,2,3,4,0])) // [4]
console.log(arrayLeaders([16,17,4,3,5,2])) // [17,5,2]
console.log(arrayLeaders([-1,-29,-26,-2])) // [-1]
console.log(arrayLeaders([-36,-12,-27])) //  [-36,-12]
console.log(arrayLeaders([5,-2,2])) // [5,2]
console.log(arrayLeaders([0,-1,-29,3,2])) //  [0,-1,3,2]