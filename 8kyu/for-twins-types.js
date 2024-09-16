function typeValidation(variable, type) {
    return typeof variable === type;
}

console.log(typeValidation(42, "number"))
console.log(typeValidation("42", "number"))