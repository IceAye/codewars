function dropWhile(array, predicate) {
    const index = array.findIndex(elem => !predicate(elem));
    return index < 0 ? [] : array.slice(index);
}

console.log(dropWhile([2, 4, 8, 5, 7, 9, 16, 32],  isEven = (x) => Math.abs(x) % 2 === 0)) // [5, 7, 9, 16, 32]