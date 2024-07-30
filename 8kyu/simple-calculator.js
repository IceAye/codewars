function calculator(a, b, sign) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || !/\+|\-|\*|\//.test(sign))
        return "unknown value";
    else if (sign === "+") return a + b;
    else if (sign === "-") return a - b;
    else if (sign === "*") return a * b;
    else return a / b;
}

console.log(calculator(1, 2, "+"));
console.log(calculator(1, 2, "-"));
console.log(calculator(3, 5, "*"));
console.log(calculator(6, 2, "/"));
console.log(calculator(6, 2, "$"));
console.log(calculator(6, "h", "*"));