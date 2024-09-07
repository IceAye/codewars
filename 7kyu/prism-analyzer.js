function prismProperties(s) {
    let n = (s - 2) / 6
    let v = 2 * n;
    let e = 3 * n;
    let f = n + 2;
    return [v, e, f, n];
}

console.log(prismProperties(26));
console.log(prismProperties(44));
console.log(prismProperties(74));
console.log(prismProperties(32));