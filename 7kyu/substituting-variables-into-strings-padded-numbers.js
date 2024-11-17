// ❓ DESCRIPTION:
// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
//
// ✅ SOLUTION:
function solution(value){
    return `Value is ${value.toString().padStart(5, 0)}`;
}

// 📌 TESTCASE:
console.log(solution(5)) // "Value is 00005"
console.log(solution(1204)) // "Value is 01204"
console.log(solution(109)) // "Value is 00109"
console.log(solution(0)) // "Value is 00000"