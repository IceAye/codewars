// ❓ DESCRIPTION:
// Write a function that will check if two given characters are the same case.
//
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
//
// ✅ SOLUTION:
function sameCase( a , b ) {
    if (!a.match(/[A-Za-z]/g) || !b.match(/[A-Za-z]/g)) {
        return -1
    } else if ((a.match(/[A-Z]/g) && b.match(/[A-Z]/g)) || a.match(/[a-z]/g) && b.match(/[a-z]/g)) {
        return 1
    } else
        return 0
}

console.log(sameCase( 'C', 'B'))
console.log(sameCase( 'b', 's'))
console.log(sameCase( 'A', 's'))