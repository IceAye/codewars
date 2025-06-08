// ❓ DESCRIPTION:
// In this kata you need to write a function that will receive two strings (n1 and n2), each representing an integer as a binary number. A third parameter will be provided (o) as a string representing one of the following operators: add, subtract, multiply.
//
// Your task is to write the calculate function so that it will perform the arithmetic and the result returned should be a string representing the binary result.
//
// Examples:
// 1 + 1 === 10
// 10 + 10 === 100
// Negative binary numbers are usually preceded by several 1's. For this kata, negative numbers can be represented with the negative symbol at the beginning of the string.
//
// Examples of negatives:
// 1 - 10 === -1
// 10 - 100 === -10
//
// ✅ SOLUTION:
function calculate(n1, n2, o) {
    let number1 = parseInt(n1, 2);
    let number2 = parseInt(n2, 2);

    function doOperation(o) {
        switch (o) {
            case 'add':
                return number1 + number2;
            case 'subtract':
                return number1 - number2;
            case 'multiply':
                return number1 * number2;
        }
    }

    return doOperation(o).toString(2);
}

// 📌 TESTCASE:
console.log(calculate('1', '1', 'add'), '10');
console.log(calculate('1', '1', 'subtract'), '0');
console.log(calculate('1', '1', 'multiply'), '1');
console.log(calculate('10', '10', 'multiply'), '100');
console.log(calculate('100', '10', 'subtract'), '10');
console.log(calculate('1', '10', 'subtract'), '-1');
console.log(calculate('10', '100', 'subtract'), '-10');
