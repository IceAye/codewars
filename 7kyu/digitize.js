function digitize(n) {
    return Array.from(n.toString(), Number);
}

console.log(digitize(123)) // [1,2,3]
console.log(digitize(1)) // [1]
console.log(digitize(0)) // [0]
console.log(digitize(1230)) // [1,2,3, 0]
console.log(digitize(8675309)) // [8,6,7,5,3,0,9]