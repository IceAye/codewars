function doubleChar(str) {
    let array = [];
    for (let char of str) {
        array.push(char + char);
    }
    return array.join('').toString();
}

console.log(doubleChar("abcd"))
console.log(doubleChar("Adidas"))
console.log(doubleChar("%^&*("))