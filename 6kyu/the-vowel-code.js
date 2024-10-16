const base = "aeiou"

function encode(string) {
    return string.replace(/[aeiou]/g, char => base.indexOf(char) + 1)
}

console.log(encode('hello'));
console.log(encode('How are you today?'));

function decode(string) {
    return string.replace(/[12345]/g, char => base.at(+char - 1))
}

console.log(decode('h2ll4'));
console.log(decode('H4w 1r2 y45 t4d1y?'));
