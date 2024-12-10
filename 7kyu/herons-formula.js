function heron(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(heron(3, 4, 5)) // 6
console.log(heron(6, 8, 10)) // 24