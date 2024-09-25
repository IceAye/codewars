// ❓ DESCRIPTION:
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
// The first mission: Traversing arr, find the shortest string length.
// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
//
// ✅ SOLUTION:
function cutIt(arr){
    let min = Math.min(...arr.map(item => item.length))
    return arr.map(item => item.slice(0, min));
}

// 📌 TESTCASE:
console.log(cutIt(["ab","cde","fgh"]))
console.log(cutIt(["abc","defgh","ijklmn"]))
console.log(cutIt(["codewars","javascript","java"]))