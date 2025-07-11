function pattern(n) {
    const output = [];

    for (let i = 1; i <= n; i++) {
        let current = n;
        let string = "";
        let j = 0;

        while (j < i) {
            string += current;
            current--;
            j++;
        }

        output.push(string);
    }

    return output.join("\n");
}

function pattern(n) {
    const output = [];

    let string = '';
    for (let i = n; i > 0; i--) {
        string += i;
        output.push(string);
    }

    return output.join("\n");
}

console.log(pattern(1)); // "1");
console.log(pattern(2)); // "2\n21");
console.log(pattern(5)); // "5\n54\n543\n5432\n54321");
