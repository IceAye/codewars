function cheapestQuote(newspapers) {
    let count = 0;
    while (newspapers >= 40) {
        count += 3.85;
        newspapers -= 40;
    }
    while (newspapers >= 20) {
        count += 1.93;
        newspapers -= 20;
    }
    while (newspapers >= 10) {
        count += 0.97;
        newspapers -= 10;
    }
    while (newspapers >= 5) {
        count += 0.49;
        newspapers -= 5;
    }
    while (newspapers >= 1) {
        count += 0.10;
        newspapers -= 1;
    }
    return +count.toFixed(2);
}

function cheapestQuote(newspapers) {
    let count = 0;

    count += Math.floor(newspapers/40) * 3.85;
    newspapers %= 40;

    count += Math.floor(newspapers/20) * 1.93;
    newspapers %= 20;

    count += Math.floor(newspapers/10) * 0.97;
    newspapers %= 10;

    count += Math.floor(newspapers/5) * 0.49;
    newspapers %= 5;

    count += newspapers * 0.1;

    return Math.round(count * 100) / 100;
};

console.log(cheapestQuote(40)) //  3.85
console.log(cheapestQuote(20)) //  1.93
console.log(cheapestQuote(10)) //  0.97
console.log(cheapestQuote(5)) //  0.49
console.log(cheapestQuote(1)) //  0.10
console.log(cheapestQuote(41)) //  3.95
console.log(cheapestQuote(80)) //  7.70
console.log(cheapestQuote(26)) //  2.52
