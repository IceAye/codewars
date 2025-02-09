function isLucky(n) {
    return n % 9 === 0;
}

console.log(isLucky(1892376)); // true
console.log(isLucky(189237)); // false
console.log(isLucky(1098)); // true
console.log(isLucky(22869)); // true
console.log(isLucky(0)); // true