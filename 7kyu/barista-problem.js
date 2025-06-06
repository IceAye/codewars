function barista(coffees){
    coffees.sort((a, b) => a - b);
    let sum = [coffees[0] || 0];

    for (let i = 1; i < coffees.length; i++) {
        sum.push(sum[i - 1] + 2 + coffees[i]);
    }
    return sum.reduce((acc, curr) => acc + curr, 0);
}

console.log(barista([]), 0);
console.log(barista([2,10,5,3,9]), 85);
console.log(barista([4,3,2]),22);
console.log(barista([20,5]),32);
console.log(barista([20,5,4,3,1,5,7,8]),211);
console.log(barista([5,4,3,2,1]),55);
