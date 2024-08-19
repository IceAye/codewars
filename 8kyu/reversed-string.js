// ❓ DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.
//
// ✅ SOLUTION:
function solution(str){
    return str.split("").reverse().join("");
}

console.log(solution("world"))
console.log(solution("hello"))
console.log(solution(""))
console.log(solution("h"))