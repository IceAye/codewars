// ❓ DESCRIPTION:
// Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a
// character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding
// mathematical function on the two numbers. If the string is not one of the specified characters, the function should
// return null.
//
// ✅ SOLUTION:
let calculate = function calculate( a , o , b ) {
    if (o === "+") return a + b;
    if (o === "-") return a - b;
    if (o === "/" && b !== 0) return a / b;
    if (o === "*") return a * b;
    return null;
};

console.log(calculate(4 , "+" , 2));
console.log(calculate(4 , "-" , 2));
console.log(calculate(2 , "*" , 2));
console.log(calculate(2 , "/" , 2));
console.log(calculate(8 , "m" , 2));
console.log(calculate(4 , "/" , 0));