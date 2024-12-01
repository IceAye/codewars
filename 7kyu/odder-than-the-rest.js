// ❓ DESCRIPTION:
// Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.
// This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.
//
// ✅ SOLUTION 1:
function oddOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) % 2 === 1) return i;
    }
    return -1;
}

// ✅ SOLUTION 2:
function oddOne(arr) {
    return arr.findIndex(item => item % 2 !== 0);
}

// 📌 TESTCASE:
console.log(oddOne([2,4,6,7,10])) // 3
console.log(oddOne([2,16,98,10,13,78])) // 4
console.log(oddOne([4,-8,98,-12,-7,90,100])) // 4
console.log(oddOne([2,4,6,8])) // -1