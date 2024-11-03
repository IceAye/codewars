// SOLUTION 1:
function explode(s) {
    let string = "";
    for (const char of s) {
        string += char.repeat(+char);
    }
    return string;
}

// SOLUTION 2:
function explode(s) {
    return s.replace(/\d/g, d => d.repeat(d))
}

console.log(explode("312")) // "333122"
console.log(explode("102269")) // "12222666666999999999"
console.log(explode("0")) // ""
console.log(explode("000")) // ""
console.log(explode("123")) // "122333"