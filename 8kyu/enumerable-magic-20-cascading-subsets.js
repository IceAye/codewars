function eachCons(array, n) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array.slice(i, i + n));
    }
    return result.filter(item => item.length === n);
}

console.log(eachCons([1, 2, 3, 4], 2));
console.log(eachCons([1, 2, 3, 4], 3));
