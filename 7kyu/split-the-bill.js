function splitTheBill(x) {
    let sum = Object.values(x).reduce((acc, curr) => acc + curr, 0) / Object.values(x).length;
    let result = {};
    for (let key in x) {
        result[key] = +(x[key] - sum).toFixed(2);
    }
    return result;
}

console.log(splitTheBill({A: 20, B: 15, C: 10})) // {A: 5, B: 0, C: -5}
console.log(splitTheBill({A: 40, B: 25, X: 10})) // {A: 15, B: 0, X: -15}