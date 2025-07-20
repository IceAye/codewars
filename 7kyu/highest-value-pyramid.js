function pyramid(stones) {
    const stonesFreq = new Map();

    for (const stone of stones) {
        stonesFreq.set(stone, stonesFreq.get(stone) + 1 || 1);
    }

    if (stonesFreq.size < 3) return null;

    const sorted = [...stonesFreq.entries()].sort((a, b) => b[0] - a[0] || b[1] - a[1]);
    let sum = [false, false, false];

    let i = 0;
    while (sum.some(el => el === false)) {
        if (sorted[i]) {
            if (sorted[i][1] >= 3 && sum[2] === false) {
                sum[2] = sorted[i][0] * 3;
            } else if (sorted[i][1] >= 2 && sum[1] === false) {
                sum[1] = sorted[i][0] * 2;
            } else if (sum[0] === false) {
                sum[0] = sorted[i][0];
            }
            i++;
        } else return null;
    }

    return sum.reduce((acc, curr) => acc + curr, 0);
}

console.log(pyramid([1, 1, 1, 2, 2, 2, 3, 3, 3]), 14);
console.log(pyramid([-1, -1, 0, 0, 1, 1]), null);
console.log(pyramid([]), null);
console.log(pyramid([1, 1, 1, 2, 2, 3]), 10);
console.log(pyramid([5, 3, 5, 3, 0, 0, -1, 0, 0, 3, 3, 3]), 19);
console.log(pyramid([1, 0, -1, -1, -2, -1, -2, -10]), -6);
console.log(pyramid([-10, -10, -6, 6, -6, 4, -6, 4, 2, 0, 10, -10, -10]), 0);
console.log(pyramid([7, 7, 7, 7, 7, 7]), null);
console.log(pyramid([10, 10, 5, 5, 1, 1]), null);
