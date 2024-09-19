// SOLUTION 1:
function adjacentElementsProduct(array) {
    return Math.max(...(array.map((item, index, array) => item * array[index + 1])).slice(0, -1))
}

// SOLUTION 2:
function adjacentElementsProduct(array) {
    let arrayMult = [];
    for (let i = 0; i < array.length - 1; i++) {
        arrayMult.push(array[i] * array[i + 1]);
    }
    return Math.max(...arrayMult);
}

console.log(adjacentElementsProduct([5, 8]));
console.log(adjacentElementsProduct([1, 2, 3]));
console.log(adjacentElementsProduct([1, 5, 10, 9]));
