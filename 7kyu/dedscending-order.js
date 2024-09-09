// ❓ DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// ✅ SOLUTION:
function descendingOrder(n){
    return +n.toString().split('').sort().reverse().join('');
}

console.log(descendingOrder(15))
console.log(descendingOrder(1021))
console.log(descendingOrder(123456789))