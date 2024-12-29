// ❓ DESCRIPTION:
// You have to write a calculator that receives strings for input.
// The dots will represent the number in the equation.
// There will be dots on one side, an operator, and dots again after the operator.
// The dots and the operator will be
// separated by one space.
// Here are the following valid operators :
// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task) You'll have to return a string that contains dots, as many the equation returns.
// If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater
// than or equal to the second number.
//
// ✅ SOLUTION:
function dotCalculator(equation) {
    let array = equation.split(' ');

    let number1 = array[0].length;
    let number2 = array[2].length;

    let result = 0;
    switch (array[1]) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '//':
            result = Math.floor(number1 / number2);
            break;
    }

    return '.'.repeat(result);
}

// 📌 TESTCASE:
console.log(dotCalculator("..... + ...............")) //  "...................."
console.log(dotCalculator("..... - ...")) //  ".."
console.log(dotCalculator("..... - .")) //  "...."
console.log(dotCalculator("..... * ...")) //  "..............."
console.log(dotCalculator("..... * ..")) //  ".........."
console.log(dotCalculator("..... // ..")) //  ".."
console.log(dotCalculator("..... // .")) //  "....."
console.log(dotCalculator(". // ..")) //  ""
console.log(dotCalculator(". - .")) //  ""