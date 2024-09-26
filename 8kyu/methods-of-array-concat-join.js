// ❓ DESCRIPTION:
// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).
// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.
// And then sort array in descending order.
// Finally, use the separator ">" to connect the elements into a string.
// Don't complain about the situation like 1>1 is not reasonable, it is just a separator.
//
// ✅ SOLUTION:
function bigToSmall(arr){
    let result = [].concat(...arr)
    return result.sort((a, b) => b - a).join(">")
}

// 📌 TESTCASE:
console.log(bigToSmall([[1,2],[3,4],[5,6]]))
console.log(bigToSmall([[1,3,5],[2,4,6]]))
console.log(bigToSmall([[1,1],[1],[1,1]]))