function odds(values){
    return values.filter(item => item % 2 !== 0 );
}

console.log(odds([1, 2, 3, 4, 5]))
console.log(odds([2, 4, 6] ))