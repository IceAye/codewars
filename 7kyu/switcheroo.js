// ❓ DESCRIPTION:
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
//
// ✅ SOLUTION:
function switcheroo(x){
    return x.replaceAll(/[ab]/g, c => c === "a" ? "b" : "a");
}

// 📌 TESTCASE:
console.log(switcheroo('abc'))
console.log(switcheroo('aaabcccbaaa'))
console.log(switcheroo('ccccc'))
