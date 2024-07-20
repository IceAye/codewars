// ❓ DESCRIPTIOM:
// You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer)
// and does the following:
//
// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible.
// Note that submitting the given code will not work because there is a character limit of 137.
//
// ✅ SOLUTION:
function describeAge(age) {
    return `You're a(n) ${age>64?"elderly":age>17?"adult":age>12?"teenager":"kid"}`
}

console.log(describeAge(9))
console.log(describeAge(17))
console.log(describeAge(64))
console.log(describeAge(18))
console.log(describeAge(65))

// 📌 NOTE:
// Author's personal best: 128
// Your character count: 113
// Fantastic!  You've beaten the author's personal best! :D