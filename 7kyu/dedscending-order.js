function descendingOrder(n){
    return +n.toString().split('').sort().reverse().join('');
}

console.log(descendingOrder(15))
console.log(descendingOrder(1021))
console.log(descendingOrder(123456789))