function fourSeven(n) {
    const obj = {
        7: 4,
        4: 7,
    };
    return obj[n] || 0;
}

console.log(fourSeven(7)); // 4
console.log(fourSeven(4)); // 7
console.log(fourSeven(1)); // 0