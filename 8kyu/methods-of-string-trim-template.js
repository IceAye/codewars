// ❓ DESCRIPTION:
// Coding in function fiveLine, function accept 1 parameter:s. s is a string.
// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;
// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.
// Note2: Using a string template can make your job easier.
//
// ✅ SOLUTION:
function fiveLine(s){
    let string = s.trim()
    let result = string;
    let i = 2
    while (i < 6) {
        result += "\n" + string.repeat(i);
        i++;
    }
    return result;
}

// 📌 TESTCASE:
console.log(fiveLine("  a"));
console.log(fiveLine("\txy \n"));
console.log(fiveLine("           Ok               "));
