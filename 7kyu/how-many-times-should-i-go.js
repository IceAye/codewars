function howManyTimes(annualPrice, individualPrice) {
    let result = 0;
    let sum = 0;
    while (sum < annualPrice) {
        result++;
        sum += individualPrice;
    }
    return individualPrice ? result : 0;
}

function howManyTimes(annualPrice, individualPrice) {
    return Math.ceil(annualPrice / individualPrice);
}

console.log(howManyTimes(40,15), 3)
console.log(howManyTimes(30,10), 3)
console.log(howManyTimes(80,15), 6)