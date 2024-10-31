function multiplyAll(array) {
    return function (int) {
        return array.map((item) => item * int);
    };
}

console.log(multiplyAll([1, 2, 3])(2)); // [2,4,6]
console.log(multiplyAll([1, 2, 3])(1)); // [1,2,3]
console.log(multiplyAll([1, 2, 3])(0)); // [0,0,0]
console.log(multiplyAll([])(10)); // []