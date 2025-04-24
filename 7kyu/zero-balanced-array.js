function ìsZeroBalanced(n){
    const map = new Map();
    let sum = 0;

    for (const number of n) {
        sum += number;
        const current = Math.abs(number);

        if (number !== 0) map.set(current, map.get(current) + 1 || 1);
    }

    return n.length > 0 && sum === 0 && [...map.values()].every(item => item % 2 === 0);
}

console.log(ìsZeroBalanced([0, 0, 0, 0, 0, 0], true));
console.log(ìsZeroBalanced([0, 1, -1], true));
console.log(ìsZeroBalanced([0], true));
console.log(ìsZeroBalanced([0, 0, 0, 0, 0], true));
console.log(ìsZeroBalanced([1, -1, 2, -2], true));
console.log(ìsZeroBalanced([3, -3, 5, -5, 7, -7], true));
console.log(ìsZeroBalanced([3], false));
console.log(ìsZeroBalanced([-3], false));
console.log(ìsZeroBalanced([], false));
console.log(ìsZeroBalanced([3, -2, -1], false));
console.log(ìsZeroBalanced([1, 1, -2], false));
console.log(ìsZeroBalanced([-1, 1, -2, 2, -2, -2, -4, 4], false));