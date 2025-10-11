function calculate(string) {
    const operators = string.match(/(\d+)|(loses)|(gains)/g);
    return operators[1] === 'loses' ? +operators[0] - +operators[2] : +operators[0] + +operators[2];
}

console.log(calculate("Panda has 48 apples and loses 4"), 44);
console.log(calculate("Jerry has 34 apples and gains 6"), 40);