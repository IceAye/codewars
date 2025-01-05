function pattern(n) {
    let output = "1";
    let i = 1;
    while (i < n) {
        output += "\n1" + "*".repeat(i) + (i + 1);
        i++;
    }
    return output;
}

console.log(pattern(3)); // "1\n1*2\n1**3"
console.log(pattern(7)); // "1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7"