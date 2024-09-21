// ❓ DESCRIPTION:
// Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
//
// ✅ SOLUTION:
function typeValidation(variable, type) {
    return typeof variable === type;
}

console.log(typeValidation(42, "number"))
console.log(typeValidation("42", "number"))