// ❓ DESCRIPTION:
// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.
// eg: foobar == fooBAR
// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.
//
// ✅ SOLUTION:
function sillycase(silly) {
    let midpoint = Math.ceil(silly.length / 2);
    return silly.slice(0, midpoint).toLowerCase() + silly.slice(midpoint).toUpperCase();
}

// 📌 TESTCASE:
console.log(sillycase("foobar")); // "fooBAR"
console.log(sillycase("codewars")); // "codeWARS"
console.log(sillycase("brian")); // 'briAN'