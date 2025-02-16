// ❓ DESCRIPTION:
// You have a string of numbers; starting with the third number each number is the result of an operation performed using the previous two numbers.
//
// Complete the function which returns a string of the operations in order and separated by a comma and a space, e.g. "subtraction, subtraction, addition"
//
// The available operations are (in this order of preference):
//
// 1) addition
// 2) subtraction
// 3) multiplication
// 4) division
// Notes:
//
// All input data is valid
// The number of numbers in the input string >= 3
// For a case like "2 2 4" - when multiple variants are possible - choose the first possible operation from the list (in this case "addition")
// Integer division should be used
//
// ✅ SOLUTION:
function sayMeOperations(str) {
    let result = [];
    let arr = Array.from(str.split(" "), Number);
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] + arr[i + 1] === arr[i + 2]) result.push("addition");
        else if (arr[i] - arr[i + 1] === arr[i + 2]) result.push("subtraction");
        else if (arr[i] * arr[i + 1] === arr[i + 2]) result.push("multiplication");
        else if (Math.trunc(arr[i] / arr[i + 1]) === arr[i + 2]) result.push("division");
    }
    return result.join(', ');
}

// 📌 TESTCASE :
console.log(sayMeOperations("1 2 3 5 8")) // "addition, addition, addition"
console.log(sayMeOperations("9 4 5 20 25")) // "subtraction, multiplication, addition"
console.log(sayMeOperations("10 2 5 -3 -15 12")) // "division, subtraction, multiplication, subtraction"
console.log(sayMeOperations("2 2 4")) // "addition"