function sumCubes(n) {
    return Array.from({ length: n }, (_, index) => index + 1)
        .map((item) => item ** 3)
        .reduce((sum, current) => sum + current);
}

console.log(sumCubes(2));
console.log(sumCubes(3));
