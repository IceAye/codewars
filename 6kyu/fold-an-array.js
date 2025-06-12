function foldArray(array, runs) {
    let result = [...array];
    while (runs > 0) {
        const temp = [];
        const middle = Math.floor(result.length / 2);

        for (let i = 0; i < middle; i++) {
            temp.push(result[i] + result[result.length - 1 - i]);
        }

        if (result.length % 2 === 1) temp.push(result[middle]);

        result = temp;
        runs--;
    }
    return result;
}

console.log(foldArray([1, 2, 3, 4, 5], 1), [6, 6, 3]);
console.log(foldArray([1, 2, 3, 4, 5], 2), [9, 6]);
console.log(foldArray([1, 2, 3, 4, 5], 3), [15]);
console.log(foldArray([-9, 9, -8, 8, 66, 23], 1), [14, 75, 0]);
