function findEvenIndex(arr) {
    if (arr.slice(1).reduce((sum, current) => sum + current, 0) === 0) return 0;

    let i = 1;
    while (i < arr.length) {
        if (
            arr.slice(0, i).reduce((sum, current) => sum + current, 0) ===
            arr.slice(i + 1).reduce((sum, current) => sum + current, 0)
        ) {
            return i;
        } else {
            i++;
        }
    }
    return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));
console.log(findEvenIndex([0,0,0,0,0]));
