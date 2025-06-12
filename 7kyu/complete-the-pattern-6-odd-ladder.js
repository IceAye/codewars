function pattern(n) {
    let output = [];
    for (let i = 1; i <= n; i += 2) {
        output.push(i.toString().repeat(i));
    }
    return output.join("\n");
}

console.log(pattern(4), "1\n333");
console.log(pattern(1), "1");
console.log(pattern(5), "1\n333\n55555");
console.log(pattern(0), "");
console.log(pattern(-25), "");
