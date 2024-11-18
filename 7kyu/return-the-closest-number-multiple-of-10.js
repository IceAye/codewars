const closestMultiple10 = num => {
    return Math.round(num / 10) * 10;
};

console.log(closestMultiple10(22)) // 20
console.log(closestMultiple10(25)) // 30
console.log(closestMultiple10(37)) // 40