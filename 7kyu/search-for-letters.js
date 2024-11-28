// ❓ DESCRIPTION:
// Create a function which accepts one arbitrary string as an argument, and return a string of length 26.
// The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).
// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.
// For instance:
// "a   **&  cZ"  =>  "10100000000000000000000001"
// "aaaaaaa79345675"  =>  "10000000000000000000000000"
// "&%#*"  =>  "00000000000000000000000000"
//
// ✅ SOLUTION:
function change(string){
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const result = new Array(26).fill(0)
    let letters = string.toLowerCase().replace(/\W/gi, '');
    for (const letter of letters) {
        result[abc.indexOf(letter)] = 1
    }
    return result.join('');
}

// 📌 TESTCASE:
console.log(change("a **&  bZ")) // "11000000000000000000000001"
