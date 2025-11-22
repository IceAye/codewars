function pattern(n){
    if (n <= 0) return '';
    const result = [];
    let string = new Array(n).fill(1).map((item, index) => String(item + index));

    for (let i = 0; i < n; i++) {
        result.push([...string].join(''));
        const end = string.shift();
        string.push(end);
    }

    return result.join('\n');
}

console.log(pattern(4), "1234\n2341\n3412\n4123")