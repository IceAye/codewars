function reverseNumber(n) {
    if (n >= 0 && n < 10) return n;
    return Math.sign(n) * +[...Math.abs(n).toString()].reverse().join("");
}

console.log(reverseNumber(5));
console.log(reverseNumber(123));
console.log(reverseNumber(-123));
console.log(reverseNumber(1000));
console.log(reverseNumber(4321234));