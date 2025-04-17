function numberJoy(n) {
    let sum = Array.from(n.toString(), Number).reduce((acc, curr) => acc + curr, 0);
    let reverse = +Array.from(sum.toString()).reverse().join('');
    return sum * reverse === n;
}

console.log(numberJoy(1997), false)
console.log(numberJoy(1998), false)
console.log(numberJoy(1729), true)
console.log(numberJoy(18), false)
console.log(numberJoy(1), true)
console.log(numberJoy(81), true)
console.log(numberJoy(1458), true)