// ❓ DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.
//
// 📌 Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
//
// ✅ SOLUTION:
function solution(string) {
    return string.replace(/([A-Z])/g, ' $1')
}

console.log('Output: ' , solution("camelCasing"))
console.log('Output: ' , solution("camelCasingTest"))