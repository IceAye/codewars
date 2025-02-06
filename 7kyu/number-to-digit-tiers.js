// ❓ DESCRIPTION:
// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.
//
// ✅ SOLUTION:
function createArrayOfTiers(num) {
    let result = [];
    let string = "";
    for (const char of num.toString()) {
        string += char;
        result.push(string);
    }
    return result;
}

// 📌 TESTCASE:
console.log(createArrayOfTiers(420)); // ["4", "42", "420"]
console.log(createArrayOfTiers(2017)); // ["2", "20", "201", "2017"]