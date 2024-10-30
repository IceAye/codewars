// ❓ DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// 📌 EXAMPLES:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
//
// ✅ SOLUTION:
function XO(str) {
    let arr = str.toLowerCase().split('');
    return arr.filter((letter) => letter === 'x').length
        === arr.filter((letter) => letter === 'o').length;
}