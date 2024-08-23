function padIt(str, n) {
    let start = "";
    let end = "";
    let i = 1;
    while (i <= n) {
        if (i % 2 !== 0) {
            start += "*";
        } else end += "*";
        i++;
    }
    return start + str + end;
}

console.log(padIt("a", 1));
console.log(padIt("a", 2));
console.log(padIt("a", 3));
