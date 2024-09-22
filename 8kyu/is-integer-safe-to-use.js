function SafeInteger(n) {
    return Number.isSafeInteger(n);
}

console.log(SafeInteger(9007199254740992));
console.log(SafeInteger(9007199254740990));
