// ❓ DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// The input will be a lowercase string with no spaces.
// Good luck!
//
// ✅ SOLUTION:
function capitalize(s){
    let firstCap = ''
    let secondCap = ''
    for (let i = 0; i < s.length; i++)
        if (i === 0 || i % 2 === 0 ) {
            firstCap += s[i].toUpperCase()
            secondCap += s[i]
        } else {
            firstCap += s[i]
            secondCap += s[i].toUpperCase()
        }
    return [firstCap, secondCap]
}