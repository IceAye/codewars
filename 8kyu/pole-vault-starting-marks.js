function startingMark(bodyHeight){
    return +((bodyHeight - 1.52) * (10.67 - 9.45) / (1.83 - 1.52) + 9.45).toFixed(2)
}

console.log(startingMark(1.22));
console.log(startingMark(2.13));
console.log(startingMark(1.52));
console.log(startingMark(1.83));