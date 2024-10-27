function min(arr, toReturn) {
    let min = Math.min(...arr);
    return toReturn === "value" ? min : arr.indexOf(min);
}

console.log(min([1,2,3,4,5], 'value')) // 1
console.log(min([1,2,3,4,5], 'index')) // 0
console.log(min([500,250,750,5000,1000,230], 'value')) // 230
console.log(min([500,250,750,5000,1000,230], 'index')) // 5
console.log(min([750,50000,10,50], 'value')) // 10
console.log(min([750,50000,10,50], 'index')) // 2
