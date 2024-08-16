function uniTotal(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        sum += string.codePointAt(i);
    }
    return sum;
}

console.log(uniTotal(""));
console.log(uniTotal("a"));
console.log(uniTotal("aaa"));
console.log(uniTotal("Mary Had A Little Lamb"));
