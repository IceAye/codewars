// ❓ DESCRIPTION:
// you will be given a string that may have mixed uppercase and lowercase letters
// and your task is to convert that string to either lowercase only or uppercase only based on.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//
// ✅ SOLUTION:
function solve(s){
    let lower = 0
    let upper = 0

    for (let i = 0; i < s.length; i++) {
        s.charAt(i).match(/[a-z]/) ? lower++ : upper++
    }
    return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}
console.log('Output: ' , solve("code"))
console.log('Output: ' , solve("CODe"))
console.log('Output: ' , solve("COde"))
console.log('Output: ' , solve("Code"))