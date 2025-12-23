function sumItUp(numbersWithBases){
    let sum = 0;
    for (const [number, base] of numbersWithBases) {
        sum += parseInt(number, base);
    }
    return sum;
}

console.log(sumItUp([["101",2], ["10",8]]),13);
console.log(sumItUp([["ABC",16], ["11",2]]),2751);
console.log(sumItUp([["101",16],["7640",8],["1",9]]),4258);
