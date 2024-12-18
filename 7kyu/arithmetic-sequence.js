function nthterm(first, n, c){
    return first + c * n;
}

console.log(nthterm(1, 2, 3)) // 7
console.log(nthterm(2, 2, 2)) // 6
console.log(nthterm(-50, 10, 20)) // 150