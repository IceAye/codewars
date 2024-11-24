// ❓ DESCRIPTION:
// Given a code in the form of an array of Strings, return a single String representing the meaning of the code found through mewing it.
// The array will be of at least length 1 and every constituent String will be of equal length n to each other. Every String consists of only lowercase letters and spaces.
// Each character in the output string is the average of the corresponding characters in the input strings. This means that the 1st character of the ouput is the average of the 1st characters of all input strings, the 2nd of the output is the average of the 2nd characters of all input strings, and so on. When the average is not a whole number, round down.
// For each character at index n of the input string, μ = σ/L, where μ represents the alphabetical index of the output String's nth character, σ represents the sum of all Strings' nth characters, and L represents the length of the input array of Strings.
// Spaces are given a value of 0. Letters are given a value equal to their alphabetical index. a = 1, b = 2, c = 3, and so on.
//
// ✅ SOLUTION:

function decipher(code) {
    const abc = " abcdefghijklmnopqrstuvwxyz"
    let result = new Array(code[0].length).fill(0)
    for (const string of code) {
        for (let i = 0; i < string.length; i++) {
            result[i] += abc.indexOf(string[i])
        }
    }
    return result.map(item => abc[Math.floor(item / code.length)]).join("")
}

// 📌 TESTCASE:
console.log(decipher(["u lk zxuq hfk as fouh","y l  zpuv  xe at sicd","welvayfuqbfpeaauaqcrc"])) // "walk your dog at nine"
