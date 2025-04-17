function fusc(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n % 2 === 0) return fusc(n / 2);
    if (n % 2 === 1) return fusc((n - 1) / 2) + fusc((n - 1) / 2 + 1);
}

console.log(fusc(0, 0));
console.log(fusc(1, 1));
console.log(fusc(2, 1));
console.log(fusc(3, 2));
console.log(fusc(19, 7));
console.log(fusc(42, 8));
console.log(fusc(85, 21));
