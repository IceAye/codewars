// ❓ DESCRIPTION:
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
// All non-vowels including non alpha characters (spaces,commas etc.) should be included.
//
// ✅ SOLUTION 1:
function vowelOne(s) {
    let result = "";
    for (const char of s) {
        /[euioa]/i.test(char) ? (result += "1") : (result += "0");
    }
    return result;
}

// ✅ SOLUTION 2:
function vowelOne(s){
    return s.replace(/[^aeiou]/gi, "0").replace(/[^\d]/g, "1");
}

// 📌 TESTCASE:
console.log( vowelOne( "vowelOne" )) // "01010101"
console.log( vowelOne( "123, arou" )) // "000001011"