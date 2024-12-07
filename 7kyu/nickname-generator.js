// ❓ DESCRIPTION:
// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.
// If the 3rd letter is a consonant, return the first 3 letters.
// If the 3rd letter is a vowel, return the first 4 letters.
// If the string is less than 4 characters, return "Error: Name too short".
// Notes:
// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified
//
// ✅ SOLUTION:
function nicknameGenerator(name) {
    if (name.length < 4) return "Error: Name too short";
    return /[euioa]/g.test(name[2]) ? name.slice(0, 4) : name.slice(0, 3);
}

// 📌 TESTCASE:
console.log(nicknameGenerator("Jimmy")) // "Jim"
console.log(nicknameGenerator("Samantha")) // "Sam"
console.log(nicknameGenerator("Sam")) // "Error: Name too short"
console.log(nicknameGenerator("Kayne")) // "Kay", "'y' is not a vowel"
console.log(nicknameGenerator("Melissa")) // "Mel"
console.log(nicknameGenerator("James")) // "Jam"