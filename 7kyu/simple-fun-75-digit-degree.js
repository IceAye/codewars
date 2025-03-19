function digitDegree(n) {
    let i = 0;

    while (n >= 10) {
        n = Array.from(n.toString(), Number).reduce((acc, curr) => acc + curr, 0);
        i++;
    }

    return i;
}

console.log(digitDegree(5)) // 0
console.log(digitDegree(100)) // 1
console.log(digitDegree(91)) // 2
console.log(digitDegree(99)) // 2
console.log(digitDegree(1234567)) // 3
console.log(digitDegree(1000000000)) // 1
