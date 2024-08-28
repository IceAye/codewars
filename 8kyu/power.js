// SOLUTION 1:
function numberToPower(number, power){
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}

// SOLUTION 2 (recursion):
function numberToPower(number, power){
    return power > 0 ? number * numberToPower(number, power - 1) : 1;
}

console.log(numberToPower(3, 2))
console.log(numberToPower(10, 4))
console.log(numberToPower(3, 0))