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

console.log(calculate('1', '1', 'add'), '10');
console.log(calculate('1', '1', 'subtract'), '0');
console.log(calculate('1', '1', 'multiply'), '1');
console.log(calculate('10', '10', 'multiply'), '100');
console.log(calculate('100', '10', 'subtract'), '10');
console.log(calculate('1', '10', 'subtract'), '-1');
console.log(calculate('10', '100', 'subtract'), '-10');
