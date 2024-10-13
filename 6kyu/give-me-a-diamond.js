function diamond(n){
    if (n <= 0 || n % 2 === 0) return null;
    if (n === 1) return "*\n"
    let line = "";
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) line += " ".repeat((n - i)/2) + "*".repeat(i) + "\n";
    }
    return line + line.split("\n").reverse().slice(2).join("\n") + "\n"
}

console.log(diamond(5));
console.log(diamond(3));
console.log(diamond(2));
console.log(diamond(0));
console.log(diamond(-3));