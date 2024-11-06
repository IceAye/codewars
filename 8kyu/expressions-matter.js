function expressionMatter(a, b, c) {
    let x = a * b * c;
    let y = a * b + +c;
    let z = +a + b * c;
    let x1 = +a + +b + +c;
    let y1 = a * (b + c);
    let z1 = (a + b) * c;
    return Math.max(x, y, z, x1, y1, z1);
}