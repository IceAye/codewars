// ❓ DESCRIPTION:
// You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.
// Good thing you can code!
// Complete the function to return a dollar amount of how much change you have!
//
// Valid types of change include:
// penny: 0.01
// nickel: 0.05
// dime: 0.10
// quarter: 0.25
// dollar: 1.00
// These amounts are already preloaded as floats into the CHANGE object for you to use!
//
// You should return the total in the format $x.xx.
// Warning, some change may amount to over $10.00!
//
// ✅ SOLUTION:
const CHANGE = {
    penny: 0.01,
    nickel: 0.05,
    dime: 0.1,
    quarter: 0.25,
    dollar: 1.0,
};

function changeCount(change) {
    return '$' + change.split(' ').reduce((acc, curr) => acc + CHANGE[curr], 0).toFixed(2);
}

// 📌 TESTCASE:
console.log(changeCount('dime penny dollar')) // '$1.11'
console.log(changeCount('dime penny nickel')) // '$0.16'
console.log(changeCount('quarter quarter')) // '$0.50'
console.log(changeCount('dollar penny dollar')) // '$2.01'
console.log(changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny')) // '$10.01'