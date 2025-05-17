function isCoprime(x, y) {
    let max = Math.max(x, y);
    for (let i = 2; i <= max; i++) {
        if ( x % i === 0 && y % i === 0) return false;
    }
    return true;
}

console.log(isCoprime(20, 27), true)
console.log(isCoprime(12, 39), false)