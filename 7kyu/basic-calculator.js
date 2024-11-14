// ❓ DESCRIPTION:
// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).
// Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#)/(None in Python).
//
// ✅ SOLUTION:
function calculate(num1, operation, num2) {
    switch (operation) {
        case "+": {
            return num1 + num2;
        }
        case "-": {
            return num1 - num2;
        }
        case "*": {
            return num1 * num2;
        }
        case "/": {
            return num2 === 0 ? null : num1 / num2;
        }
        default:
            return null
    }
}

// 📌 TESTCASE:
console.log(calculate(3.2,"+", 8)) // 11.2
console.log(calculate(3.2,"-", 8)) // -4.8
console.log(calculate(3.2,"/", 8)) // 0.4
console.log(calculate(3.2,"*", 8)) // 25.6
console.log(calculate(-3,"+", 0)) // -3
console.log(calculate(-3,"-", 0)) // -3
console.log(calculate(-3,"/", 0)) // null
console.log(calculate(-3,"*", 0)) // 0
console.log(calculate(-3,"w", 0)) // null

