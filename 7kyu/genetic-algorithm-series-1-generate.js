const generate = length => {
    let result = '';
    while (result.length < length) result += Math.floor(Math.random() * 2);
    return result;
};

console.log(generate(16));
console.log(generate(32));
console.log(generate(64));