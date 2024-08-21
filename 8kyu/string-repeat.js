// ❓ DESCRIPTION:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//
// ✅ SOLUTION:
function repeatStr (n, s) {
    return s.repeat(n);
}

console.log(repeatStr(3, "*"))
console.log(repeatStr(5, "#"))
console.log(repeatStr(2, "ha "))
console.log(repeatStr(3, "hello "))