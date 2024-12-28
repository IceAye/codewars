// ❓ DESCRIPTION:
// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1
// in the array. Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else
// false. An empty array is not considered nice.
//
// ✅ SOLUTION:
function isNice(arr) {
    if (arr.length === 0) return false;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) count++;
    }
    return count === arr.length;
}

// 📌 TESTCASE:
console.log(isNice([2 , 10 , 9 , 3])) // true
console.log(isNice([3 , 4 , 5 , 7])) // false
console.log(isNice([])) // false