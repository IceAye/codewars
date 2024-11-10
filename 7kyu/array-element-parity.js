// ❓ DESCRIPTION:
// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
//
// ✅ SOLUTION 1:
function solve(arr){
    return arr.find(item => !arr.includes(-item))
}

// ✅ SOLUTION 2:
function solve(arr){
    return [...new Set(arr)].reduce((acc, curr) => acc + curr);
}

// 📌 TESTCASE:
console.log(solve([1,-1,2,-2,3])) // 3
console.log(solve([-3,1,2,3,-1,-4,-2])) // -4
console.log(solve([1,-1,2,-2,3,3])) // 3
console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38])) // -38
console.log(solve([ -9,-105,-9,-9,-9,-9,105])) // -9