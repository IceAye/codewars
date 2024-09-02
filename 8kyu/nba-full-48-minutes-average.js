function pointsPer48(ppg, mpg) {
    return +((ppg / mpg) * 48).toFixed(1) || 0;
}

console.log(pointsPer48(12, 20));
console.log(pointsPer48(5, 17));
console.log(pointsPer48(0, 0));
