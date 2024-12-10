function getDecimal(n){
    let result = '.' + n.toString().split('.')[1];
    return +result || 0;
}

console.log(getDecimal(10)) // 0
console.log(getDecimal(-1.2)) // 0.2
console.log(getDecimal(4.5)) // 0.5
console.log(getDecimal(111.5)) // 0.5