function add(...args) {
    return args.reduce((acc, curr, ind) => acc + curr * (ind + 1), 0);
}

console.log(add(100,200,300),1400)
console.log(add(), 0);
console.log(add(1,2,3), 14);
console.log(add(1,4,-5,5), 14);