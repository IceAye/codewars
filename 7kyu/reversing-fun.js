// ❓ DESCRIPTION:
// You are going to be given a string. Your job is to return that string in a certain order that I will explain below:
//
// Let's say you start with this: "012345"
//
// The first thing you do is reverse it:"543210"
// Then you will take the string from the 1st position and reverse it again:"501234"
// Then you will take the string from the 2nd position and reverse it again:"504321"
// Then you will take the string from the 3rd position and reverse it again:"504123"
//
// Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:"504132"
//
// Input:
// A string of length 1 - 1000
//
// Output:
// A correctly reordered string.
//
// ✅ SOLUTION:

function flipNumber(s) {
    let array = s.split("");
    for (let i = 0; i < array.length; i++) {
        array = [...array.slice(0, i), ...array.slice(i).reverse()];
    }
    return array.join("");
}

// 📌 TESTCASE:
console.log(flipNumber("012"), "201");
console.log(flipNumber("012345"), "504132");
console.log(flipNumber("0123456789"), "9081726354");