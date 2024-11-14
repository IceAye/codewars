// ❓ DESCRIPTION:
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Given a number, Find if it is Disarium or not .
//
// ✅ SOLUTION:
function disariumNumber(n){
    return Array.from(n.toString(), Number).reduce((acc, curr, idx) => acc + curr ** (idx + 1), 0) === n
        ? "Disarium !!" : "Not !!";
}

// 📌 TESTCASE:
console.log(disariumNumber(89)) // "Disarium !!"
console.log(disariumNumber(564)) // "Not !!"
console.log(disariumNumber(1024)) // "Not !!"
console.log(disariumNumber(135)) // "Disarium !!"
console.log(disariumNumber(136586)) // "Not !!"