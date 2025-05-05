function validCard(card){
    function check(digit) {
        let double = 2 * digit;
        return double > 9 ? double - 9 : double
    }

    let array = [...card.replace(/\s/g, "")]
    let lastDigit = +array.pop();
    let sum = array.reverse().reduce((acc, curr, ind) => {
        return acc + (ind % 2 === 0 ? check(+curr) : +curr);
    }, 0)

    return (sum + lastDigit) % 10 === 0;
}

console.log(validCard("3333 3333 3333 3331"), true);
console.log(validCard("5457 1111 9323 4311"), false);
console.log(validCard("5457 6238 9323 4311"), false);
console.log(validCard("5457 6238 9823 4311"), true);
console.log(validCard("2222 2222 2222 2224"), true);
console.log(validCard("1234 5678 9012 3452"), true);
console.log(validCard("9999 9999 9999 9995"), true);
console.log(validCard("1252 6238 9323 4311"), false);
console.log(validCard("5457 1125 9323 4311"), false);
console.log(validCard("6666 6666 6666 6664"), true);
console.log(validCard("5457 6238 0254 4311"), false);
console.log(validCard("5457 6238 9323 4311"), false);
console.log(validCard("5457 6238 1251 4311"), false);
console.log(validCard("5457 6238 9323 1252"), false);
console.log(validCard("5457 6238 5568 4311"), false);
console.log(validCard("8888 8888 8888 8888"), true);
console.log(validCard("1145 6238 9323 4311"), false);
console.log(validCard("4444 4444 4444 4448"), true);
console.log(validCard("5458 4444 9323 4311"), false);
console.log(validCard("5457 6238 9823 4311"), true);
console.log(validCard("5457 6238 3333 4311"), false);
console.log(validCard("5555 5555 5555 5557"), true);
console.log(validCard("8895 6238 9323 4311"), false);
console.log(validCard("0123 4567 8901 2345"), false);
console.log(validCard("0000 0000 0000 0000"), true);
console.log(validCard("0025 2521 9323 4311"), false);
console.log(validCard("0000 0300 0000 0000"), false);
console.log(validCard("1111 1111 1111 1117"), true);