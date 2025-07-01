function add(n) {
    const f = (x) => add(n + x);
    f.valueOf = () => n;
    return f;
}

console.log(add(1), 1);
console.log(add(1)(2), 3);
console.log(add(1)(2)(3), 6);
console.log(add(1)(2)(3)(4), 10);

const a = add(1)(2);
const b = add(3)(4);
console.log(a(b), 10);
console.log(b(a), 10);
console.log(a, 3);
console.log(b, 7);
