// ❓ DESCRIPTION:
// Write the processArray function, which takes an array and a callback function as parameters. The callback function can be, for example, a mathematical function that will be applied on each element of this array.
//
// ✅ SOLUTION:
function processArray(arr, callback) {
    return arr.map(callback)
}

// 📌 TESTCASE:
console.log(processArray([4,8,2,7,5], n => n * 2)) // [8,16,4,14,10]
console.log(processArray([7,8,9,1,2], n => n + 5)) // [12,13,14,6,7]
console.log(processArray([-1,1,2,3,4,5], n => n * n * n)) // [-1,1,8,27,64,125]
console.log(processArray([], n => n + 1)) // []