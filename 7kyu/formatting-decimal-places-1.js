function twoDecimalPlaces(number) {
    return Math.trunc(number * 100) / 100
}


console.log(twoDecimalPlaces(10.1289767789)) // 10.12
console.log(twoDecimalPlaces(-7488.83485834983)) // -7488.83
console.log(twoDecimalPlaces(4.653725356)) // 4.65
console.log(twoDecimalPlaces(10.1289767789)) // 10.12