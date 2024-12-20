function cake(x, y) {
    let result = 0;

    for (let i = 0; i < y.length; i++) {
        i % 2 === 0
            ? (result += y.charCodeAt(i))
            : (result += y.charCodeAt(i) - 96);
    }

    return x * 0.7 >= result ? "That was close!" : "Fire!";
}

console.log(cake(900, 'abcdef')) // 'That was close!'
console.log(cake(56, 'ifkhchlhfd')) // 'Fire!'
console.log(cake(256, 'aaaaaddddr')) // 'Fire!'