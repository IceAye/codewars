// ❓ DESCRIPTION:
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
//
// 📌 EXAMPLE
// "CodEWaRs" --> [0,3,4,6]
//
// ✅ SOLUTION:
let capitals = function ( word ) {
    let result = []

    for (let i = 0; i < word.length; i++) {
        if (word.at(i).match(/[A-Z]/g)) {
            result.push(i)
        }
    }
    return result
};