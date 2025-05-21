function pattern(n) {
    let output = [];
    let i = 0;
    while (i < n) {
        let str = "";
        for (let j = i + 1; j <= n; j++) {
            str += j;
        }
        output.push(str);
        i++;
    }
    return output.join("\n");
}

console.log(pattern(1)) // "1"
console.log(pattern(2)) // "12\n2"
console.log(pattern(5)) // "12345\n2345\n345\n45\n5"