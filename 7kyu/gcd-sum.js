function solve(s,g){
    for (let i = g; i <= s; i++) {
        if (i % g === 0 && (s - i) % g === 0) return [i, s - i];
    }
    return -1;
}

console.log(solve(6,3), [3,3]);
console.log(solve(8,2), [2,6]);
console.log(solve(10,3), -1);
console.log(solve(12,4), [4,8]);
console.log(solve(12,5), -1);