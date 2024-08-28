// ❓ DESCRIPTION:
// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).
//
// Note: Math.pow and some other Math functions like eval() and ** are disabled.
//
// ✅ SOLUTION 1:
function numberToPower(number, power){
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}

// ✅ SOLUTION 2 (recursion):
function numberToPower(number, power){
    return power > 0 ? number * numberToPower(number, power - 1) : 1;
}

console.log(numberToPower(3, 2))
console.log(numberToPower(10, 4))
console.log(numberToPower(3, 0))