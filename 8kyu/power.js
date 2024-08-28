function numberToPower(number, power){
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}

console.log(numberToPower(3, 2))
console.log(numberToPower(10, 4))
console.log(numberToPower(3, 0))