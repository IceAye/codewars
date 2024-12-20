// ❓ DESCRIPTION:
// Implement a function that returns the minimal and the maximal value of a list (in this order).
//
// ✅ SOLUTION:
function getMinMax(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [min, max];
}

// 📌 TESTCASE:
console.log(getMinMax([1])) // [1,1]
console.log(getMinMax([1,2])) // [1,2]
console.log(getMinMax([2,1])) // [1,2]
