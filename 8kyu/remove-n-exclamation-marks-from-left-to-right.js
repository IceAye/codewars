function remove(s, n) {
    while (n) {
        s = s.replace(/!/, "");
        n--;
    }
    return s;
}

console.log(remove("Hi!", 1));
console.log(remove("Hi!", 100));
console.log(remove("Hi!!!", 2));