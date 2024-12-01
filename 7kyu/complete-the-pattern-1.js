function pattern(n){
    if (n < 0) return '';
    let output = '';
    let i = 1;
    while (i < n) {
        output += `${i}`.repeat(i) + '\n';
        i++;
    }
    return output + `${n}`.repeat(n);
}

console.log(pattern(1))  // "1"
console.log(pattern(2))  // "1\n22"
console.log(pattern(5))  // "1\n22\n333\n4444\n55555"