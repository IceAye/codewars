function f(x, cc) {
    switch (x) {
        case cc.a: return cc.b;
        case cc.b: return cc.c;
        case cc.c: return cc.a;
    }
}

console.log(f(3, { a: 3, b: 4, c: 5 }), 4);
console.log(f(4, { a: 3, b: 4, c: 5 }), 5);
console.log(f(5, { a: 3, b: 4, c: 5 }), 3);
