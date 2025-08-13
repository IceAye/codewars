function hexHash(code) {
    // return [...code].reduce((acc, el) => acc + parseInt(el.charCodeAt(0).toString(16)), '')
    return [...code]
        .reduce(
            (acc, el) => acc + el.codePointAt(0).toString(16).replace(/\D/g, ''),
            '',
        )
        .split('')
        .reduce((acc, curr) => acc + +curr, 0);
}

console.log(hexHash('Yo'), 20);
console.log(hexHash('Hello, World!'), 91);
console.log(hexHash('Forty4Three'), 113);
console.log(hexHash('ThisIsATest!"£$%^&*()-='), 181);
