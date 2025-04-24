function isZeroBalanced(n) {
    const map = new Map();
    let sum = 0;

    for (const number of n) {
        sum += number;
        const current = Math.abs(number);

        if (number !== 0) map.set(current , map.get(current) + 1 || 1);
    }

    return n.length > 0 && sum === 0 && [...map.values()].every(item => item % 2 === 0);
}

function isZeroBalanced(n) {
    let sum = n.reduce((acc, curr) => acc + curr, 0);
    return n.length > 0 && sum === 0 && n.every(item => n.includes(-item));
}

console.log(isZeroBalanced([0, 0, 0, 0, 0, 0], true));
console.log(isZeroBalanced([0, 1, -1], true));
console.log(isZeroBalanced([0], true));
console.log(isZeroBalanced([0, 0, 0, 0, 0], true));
console.log(isZeroBalanced([1, -1, 2, -2], true));
console.log(isZeroBalanced([3, -3, 5, -5, 7, -7], true));
console.log(isZeroBalanced([3], false));
console.log(isZeroBalanced([-3], false));
console.log(isZeroBalanced([], false));
console.log(isZeroBalanced([3, -2, -1], false));
console.log(isZeroBalanced([1, 1, -2], false));
console.log(isZeroBalanced([-1, 1, -2, 2, -2, -2, -4, 4], false));