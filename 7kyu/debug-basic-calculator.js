let calculate = function calculate(a, o, b) {
    if (o === "+") {
        return a + b;
    } else if (o === "-") {
        return a - b;
    } else if (o === "/" && b !== 0) {
        return a / b;
    } else if (o === "*") {
        return a * b;
    } else return null;
};

console.log(calculate(4, "+", 2));
console.log(calculate(4, "-", 2));
console.log(calculate(2, "*", 2));
console.log(calculate(2, "/", 2));
console.log(calculate(8, "m", 2));
console.log(calculate(4, "/", 0));