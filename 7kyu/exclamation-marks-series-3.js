function remove (string) {
    let count = 0;
    let i = string.length - 1;

    while (string[i] === '!') {
        count++;
        i--;
    }
    return string.replace(/!/g, '') + '!'.repeat(count);
}

console.log(remove("Hi!", "Hi!"))
console.log(remove("Hi!!!", "Hi!!!"))
console.log(remove("!Hi", "Hi"))
console.log(remove("!Hi!", "Hi!"))
console.log(remove("Hi! Hi!", "Hi Hi!"))
console.log(remove("Hi", "Hi"))