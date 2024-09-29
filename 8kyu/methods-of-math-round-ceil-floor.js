function roundIt(n) {
    let [a, b] = n.toString().split(".");
    return a.length < b.length
        ? Math.ceil(n)
        : a.length > b.length
            ? Math.floor(n)
            : Math.round(n);
}

console.log(roundIt(3.45));
console.log(roundIt(34.5));
console.log(roundIt(34.56));