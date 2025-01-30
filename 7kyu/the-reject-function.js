function reject(array, predicate) {
    return array.filter((item) => !predicate(item));
}

console.log(reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })) // [1, 3, 5]