function chain(input, fs) {
    return fs.reduce((input, curr) => curr(input), input);
}

function add(x) {
    return x + 10;
}

function mult(x) {
    return x * 30;
}

console.log(chain(2, [add, mult])) // 360