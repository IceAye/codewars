function explode(s) {
    let string = "";
    for (const char of s) {
        string += char.repeat(+char);
    }
    return string;
}

console.log(explode("312")) // "333122"
console.log(explode("102269")) // "12222666666999999999"
console.log(explode("0")) // ""
console.log(explode("000")) // ""
console.log(explode("123")) // "122333"