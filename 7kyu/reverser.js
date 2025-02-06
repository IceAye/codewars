function reverse(n) {
    let result = 0;
    for (let i = n; i >= 1; i = Math.floor(i / 10)) {
        result = result * 10 + (i % 10);
    }
    return result;
}

console.log(reverse(1234)); // 4321
console.log(reverse(10987)); // 78901
console.log(reverse(1020)); // 201