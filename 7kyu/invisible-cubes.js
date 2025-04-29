function notVisibleCubes(n) {
    return n > 2 ? Math.pow(n - 2, 3) : 0;
}

console.log(notVisibleCubes(0), 0);
console.log(notVisibleCubes(1), 0);
console.log(notVisibleCubes(2), 0);
console.log(notVisibleCubes(3), 1);
console.log(notVisibleCubes(5), 27);