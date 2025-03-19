function cyclicString(s) {
    let i = 1;

    while (!s.startsWith(s.slice(i))) {
        i++;
    }

    return i;
}

console.log(cyclicString("cabca")) // 3
console.log(cyclicString("aba")) // 2
console.log(cyclicString("ccccccccccc")) // 1
console.log(cyclicString("abaca")) // 4
