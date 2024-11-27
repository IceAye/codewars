function isPronic(n){
    let i = 0;
    while (i <= n) {
        if (n === i * (i + 1)) return true;
        i++;
    }
    return false;
}

console.log(isPronic(0)) // true
console.log(isPronic(1)) // false
console.log(isPronic(2)) // true
console.log(isPronic(3)) // false
console.log(isPronic(4)) // false
console.log(isPronic(5)) // false
console.log(isPronic(6)) // true
console.log(isPronic(-3)) // false
console.log(isPronic(-27)) // false