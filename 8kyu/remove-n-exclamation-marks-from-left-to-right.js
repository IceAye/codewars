function remove(s, n) {
    let i = 0;
    while (i < n) {
        s = s.replace(/!/, "");
        i++;
    }
    return s;
}

console.log(remove("Hi!", 1));
console.log(remove("Hi!", 100));
console.log(remove("Hi!!!", 2));