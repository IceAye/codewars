function add(...args) {
    return Math.round(args.reduce((acc, curr, ind) => acc + curr / (ind + 1), 0));
}

console.log(add(), 0);
console.log(add(100, 200, 300), 300);
console.log(add(2), 2);
console.log(add(4, -3, -2), 2);
console.log(add(-1, -2, -3, -4), -4);