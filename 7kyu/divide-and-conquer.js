function divCon(x){
    return x.reduce((acc, curr) => Number.isInteger(curr) ? acc + curr : acc - Number(curr), 0)
}

console.log(divCon([9, 3, '7', '3']))
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
