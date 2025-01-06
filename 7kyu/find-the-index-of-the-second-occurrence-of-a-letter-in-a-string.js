function secondSymbol(s, symbol) {
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === symbol) {
            if (count === 1) {
                count--;
            } else {
                return i;
            }
        }
    }
    return -1;
}

console.log(secondSymbol("Hello world!!!", "l")); // 3
console.log(secondSymbol("Hello world!!!", "o")); // 7
console.log(secondSymbol("Hello world!!!", "A")); // -1
console.log(secondSymbol("", "q")); // -1
console.log(secondSymbol("Hello", "!")); // -1