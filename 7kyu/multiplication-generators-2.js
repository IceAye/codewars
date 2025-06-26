function* generator(a) {
    let i = 1;
    while (true) {
        yield `${a} x ${i} = ` + i++ * a;
    }
}

let gen = generator(1);

console.log(gen.next().value, '1 x 1 = 1', '1 x 1 = 1');
console.log(gen.next().value, '1 x 2 = 2', '1 x 2 = 2');
console.log(gen.next().value, '1 x 3 = 3', '1 x 3 = 3');
console.log(gen.next().value, '1 x 4 = 4', '1 x 4 = 4');
console.log(gen.next().value, '1 x 5 = 5', '1 x 5 = 5');