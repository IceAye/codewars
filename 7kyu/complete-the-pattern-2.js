function pattern(n) {
    let output = "";
    for (let i = 0; i < n; i++) {
        let j = n;
        if (i > 0) output += "\n";
        while (j > i) {
            output += j.toString();
            j--;
        }
    }
    return output;
}

console.log(pattern(1)); // "1"
console.log(pattern(2)); // "21\n2"
console.log(pattern(5)); // "54321\n5432\n543\n54\n5"