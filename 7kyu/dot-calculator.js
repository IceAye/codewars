function dotCalculator (equation) {
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

console.log(dotCalculator("..... + ...............")) //  "...................."
console.log(dotCalculator("..... - ...")) //  ".."
console.log(dotCalculator("..... - .")) //  "...."
console.log(dotCalculator("..... * ...")) //  "..............."
console.log(dotCalculator("..... * ..")) //  ".........."
console.log(dotCalculator("..... // ..")) //  ".."
console.log(dotCalculator("..... // .")) //  "....."
console.log(dotCalculator(". // ..")) //  ""
console.log(dotCalculator(". - .")) //  ""