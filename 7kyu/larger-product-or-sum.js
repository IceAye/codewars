function sumOrProduct(array, n) {
    let sorted = array.sort((a, b) => a - b);
    let sum = array.slice(-n).reduce((acc, curr) => acc + curr, 0);
    let prod = array.slice(0, n).reduce((acc, curr) => acc * curr);
    return sum > prod ? "sum" : sum < prod ? "product" : "same";
}

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)) // "sum"
console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)) // "product"
console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3)) // "same"